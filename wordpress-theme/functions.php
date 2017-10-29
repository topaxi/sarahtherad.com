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
      $post = get_rad_post($req['slug'], 'blog');

      if (!$post) {
        return json_error(404, [
          'error' => true,
          'message' => 'Post not found',
        ]);
      }

      return serialize_post($post, true);
    },
  ]);
  register_rest_route('rad', '/graphics/(?P<slug>[a-zA-Z\d-]+)', [
    'methods' => 'GET',
    'callback' => function($req) {
      $post = get_rad_post($req['slug'], 'graphics');

      if (!$post) {
        return json_error(404, [
          'error' => true,
          'message' => 'Graphic not found',
        ]);
      }

      return serialize_graphic($post, true);
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
  $with_content = $with_content || $_GET['sitemap'];

  setup_postdata($post);
  $excerpt = get_the_excerpt($post);
  list($lang) = get_post_custom_values('language', $post->ID);
  $ret = [
    'id' => $post->ID,
    'type' => 'posts',
    'slug' => $post->post_name,
    'date' => format_date($post->post_date),
    'modified' => format_date($post->post_modified),
    'title' => $post->post_title,
    'description' => $excerpt,
    'excerpt' => apply_filters('the_excerpt', $excerpt),
    'lang' => $lang ?: null,
  ];
  if ($with_content) {
    list($color) = get_post_custom_values('color', $post->ID);
    $ret['content'] = apply_filters('the_content', $post->post_content);
    $ret['background'] = [
      'url' => get_the_post_thumbnail_url($post->ID) ?: null,
      'backgroundColor' => get_post_thumbnail_background_color($post),
      'color' => $color ?: '#fff',
    ];
  }
  wp_reset_postdata();
  return $ret;
}

function serialize_graphic($post, $with_content = false) {
  $with_content = $with_content || $_GET['sitemap'];

  setup_postdata($post);
  $attachments = new Attachments('attachments', $post->ID);
  $graphics_post = [
    'id' => $post->ID,
    'type' => 'graphics',
    'slug' => $post->post_name,
    'date' => format_date($post->post_date),
    'modified' => format_date($post->post_modified),
    'title' => $post->post_title,
    'thumbnail' => rad_thumb($post),
    'pictures' => [],
  ];
  if ($with_content) {
    $graphics_post['content'] =
      apply_filters('the_content', $post->post_content);
  }
  $thumb = $with_content ? 'original' : 'medium_large';
  while ($attachments->get()) {
    $graphics_post['pictures'][] = array(
      'src' => $with_content ? $attachments->url() : $attachments->src($thumb),
      'width' => $attachments->width($thumb) ?: null,
      'height' => $attachments->height($thumb) ?: null,
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

function rad_thumb($post, $size = 'medium_large') {
  $thumbnail_id = get_post_thumbnail_id($post);

  if (!$thumbnail_id) {
    return null;
  }

  $size = apply_filters('post_thumbnail_size', $size);

  $image = image_downsize($thumbnail_id, $size);

  list($src, $width, $height) =
    apply_filters('wp_get_attachment_image_src', $image, $attachment_id, $size, false);

  return [
    'src' => $src,
    'width' => $width,
    'height' => $height,
    'backgroundColor' => get_thumbnail_background_color($thumbnail_id),
  ];
}

function get_rad_posts($category_name, $per_page = 20) {
  return get_posts([
    'post_type' => 'post',
    'post_status' => 'publish',
    'category_name' => $category_name,
    'posts_per_page' => $per_page
  ]);
}

function get_random_posts($category_name, $per_page = 3) {
  return get_posts([
    'post_type' => 'post',
    'post_status' => 'publish',
    'category_name' => $category_name,
    'orderby' => 'rand',
    'posts_per_page' => $per_page
  ]);
}

function get_random_background() {
  list($post) = get_posts([
    'post_type' => 'home_background',
    'post_status' => 'publish',
    'orderby' => 'rand',
    'posts_per_page' => 1
  ]);

  list($color) = get_post_custom_values('color', $post->ID);

  return [
    'data' => [
      'url' => get_the_post_thumbnail_url($post->ID),
      'backgroundColor' => get_post_thumbnail_background_color($post),
      'color' => $color ?: '#fff',
    ],
  ];
}

function get_post_thumbnail_background_color($post) {
  return get_thumbnail_background_color(get_post_thumbnail_id($post));
}

function get_thumbnail_background_color($thumbnailId) {
  return get_color_data($thumbnailId, 'dominant_color_hex', true) ?: null;
}

function get_rad_post($slug, $category_name) {
  $category = get_category_by_slug($category_name);

  list($post) = get_posts([
    'name' => $slug,
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => 1
  ]);

  list($postCategory) = get_the_category($post);

  if ($category->cat_ID !== $postCategory->cat_ID) {
    return null;
  }

  return $post;
}

function format_date($date) {
  return str_replace(' ', 'T', $date) . '+0200';
}

function json_error($status, $data) {
  $data['httpStatus'] = $status;

  $res = new WP_REST_Response($data);
  $res->set_status($status);

  return $res;
}
