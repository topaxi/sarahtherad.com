<?php

function custom_upload_mimes($existing_mimes = []) {
  $existing_mimes['svg'] = 'image/svg+xml';

  return $existing_mimes;
}
add_filter( 'upload_mimes', 'custom_upload_mimes' );

add_theme_support('post-thumbnails', [
  'post',
  'home_background'
]);

register_post_type('home_background', [
  'labels' => [
    'name' => __('Home Bilder'),
    'singular_name' => __('Home Bild')
  ],
  'public' => true,
  'show_in_menu' => true,
  'has_archive' => false,
  'capability_type' => 'post',
  'supports' => [ 'title', 'thumbnail', 'custom-fields' ]
]);

add_action('rest_api_init', function() {
  register_rest_route('rad', '/background', [
    'methods' => 'GET',
    'callback' => 'get_random_background'
  ]);
  register_rest_route('rad', '/posts/(?P<slug>[a-zA-Z\d-]+)', [
    'methods' => 'GET',
    'callback' => function($req) {
      return serialize_post(get_rad_post($req['slug']), true);
    },
  ]);
  register_rest_route('rad', '/graphics/(?P<slug>[a-zA-Z\d-]+)', [
    'methods' => 'GET',
    'callback' => function($req) {
      return serialize_graphic(get_rad_post($req['slug']), true);
    },
  ]);
  register_rest_route('rad', '/posts', [
    'methods' => 'GET',
    'callback' => function() {
      return [
        'data' => array_map('serialize_post', get_rad_posts('blog'))
      ];
    }
  ]);
  register_rest_route('rad', '/graphics', [
    'methods' => 'GET',
    'callback' => function() {
      return [
        'data' => array_map('serialize_graphic', get_rad_posts('graphics'))
      ];
    }
  ]);
  register_rest_route('rad', '/home', [
    'methods' => 'GET',
    'callback' => function() {
      $posts = array_merge(
        array_map('serialize_post', get_random_posts('blog')),
        array_map('serialize_graphic', get_random_posts('graphics'))
      );

      shuffle($posts);

      return array('data' => $posts);
    }
  ]);
});

function serialize_post($post, $with_content = false) {
  setup_postdata($post);
  $excerpt = get_the_excerpt($post);
  $ret = [
    'id' => $post->ID,
    'type' => 'posts',
    'slug' => $post->post_name,
    'date' => $post->post_date,
    'title' => $post->post_title,
    'description' => $excerpt,
    'excerpt' => apply_filters('the_excerpt', $excerpt),
  ];
  if ($with_content) {
    $ret['content'] = apply_filters('the_content', $post->post_content);
  }
  wp_reset_postdata();
  return $ret;
}

function serialize_graphic($post, $with_content = false) {
  setup_postdata($post);
  $attachments = new Attachments('attachments', $post->ID);
  $graphics_post = [
    'id' => $post->ID,
    'type' => 'graphics',
    'slug' => $post->post_name,
    'date' => $post->post_date,
    'title' => $post->post_title,
    'pictures' => [],
  ];
  if ($with_content) {
    $graphics_post['content'] =
      apply_filters('the_content', $post->post_content);
  }
  while ($attachments->get()) {
    $graphics_post['pictures'][] = array(
      'src' => $attachments->src('original'),
      'width' => $attachments->width('original') ?: null,
      'height' => $attachments->height('original') ?: null,
      'title' => $attachments->field('title') ?: null,
      'caption' => $attachments->field('caption') ?: null,
      'mime' => "{$attachments->type()}/{$attachments->subtype()}",
    );
    if (!$with_content) {
      break;
    }
  }
  wp_reset_postdata();
  return $graphics_post;
}

function get_rad_posts($category_name, $per_page = 20) {
  return get_posts([
    'post_type' => 'post',
    'category_name' => $category_name,
    'posts_per_page' => $per_page
  ]);
}

function get_random_posts($category_name, $per_page = 3) {
  return get_posts([
    'post_type' => 'post',
    'category_name' => $category_name,
    'orderby' => 'rand',
    'posts_per_page' => $per_page
  ]);
}

function get_random_background() {
  list($post) = get_posts([
    'post_type' => 'home_background',
    'orderby' => 'rand',
    'posts_per_page' => 1
  ]);

  list($color) = get_post_custom_values('color', $post->ID);

  return [
    'data' => [
      'url' => get_the_post_thumbnail_url($post->ID),
      'color' => $color ?: '#fff',
    ],
  ];
}

function get_rad_post($slug) {
  list($post) = get_posts([
    'name' => $slug,
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => 1
  ]);

  return $post;
}
