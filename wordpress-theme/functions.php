<?php

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
  $thumbnail_id = get_post_thumbnail_id($post->ID);
  list($url, $width, $height) = wp_get_attachment_image_src($thumbnail_id, 'original');
  $ret = array(
    'id' => $post->ID,
    'slug' => $post->post_name,
    'date' => $post->post_date,
    'title' => $post->post_title,
    'url' => $url,
    'width' => $width,
    'height' => $height
  );
  wp_reset_postdata();
  return $ret;
}

function get_random_posts($category_name, $per_page = 3) {
  return get_posts([
    'post_type' => [ 'post' ],
    'category_name' => $category_name,
    'orderby' => 'rand',
    'posts_per_page' => $per_page
  ]);
}

function get_random_background() {
  list($post) = get_posts([
    'post_type' => [ 'home_background' ],
    'orderby' => 'rand',
    'posts_per_page' => 1
  ]);

  return array('url' => get_the_post_thumbnail_url($post->ID));
}