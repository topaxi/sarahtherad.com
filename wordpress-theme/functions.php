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
  'supports' => [ 'title', 'thumbnail' ]
]);

add_action('rest_api_init', function() {
  register_rest_route('rad', '/background', [
    'methods' => 'GET',
    'callback' => 'get_random_background'
  ]);
  register_rest_route('rad', '/posts/(?P<slug>[a-Z\d-]+)', [
    'methods' => 'GET',
    'callback' => function($req) {
      return serialize_post(get_rad_post($req['slug']));
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

function serialize_post($post) {
  setup_postdata($post);
  $ret = array(
    'id' => $post->ID,
    'type' => 'posts',
    'slug' => $post->post_name,
    'date' => $post->post_date,
    'title' => $post->post_title,
    'excerpt' => apply_filters('the_excerpt', get_the_excerpt($post)),
    'content' => apply_filters('the_content', get_the_content($post)),
  );
  wp_reset_postdata();
  return $ret;
}

function serialize_graphic($post) {
  setup_postdata($post);
  $attachments = new Attachments('attachments', $post->ID);
  $graphics_post = array(
    'id' => $post->ID,
    'type' => 'graphics',
    'slug' => $post->post_name,
    'date' => $post->post_date,
    'title' => $post->post_title,
    'pictures' => array(),
  );
  while ($attachments->get()) {
    $graphics_post['pictures'][] = array(
      'src' => $attachments->src('original'),
      'width' => $attachments->width('original') ?: null,
      'height' => $attachments->width('original') ?: null,
      'title' => $attachments->field('title') ?: null,
      'caption' => $attachments->field('caption') ?: null,
      'mime' => "{$attachments->type()}/{$attachments->subtype()}",
    );
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

  return array('data' => get_the_post_thumbnail_url($post->ID));
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
