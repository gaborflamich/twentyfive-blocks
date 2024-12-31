<?php defined('ABSPATH') || exit;

function enqueue_admin_styles() {
    if (is_admin()) {
        $admin_css_path = get_stylesheet_directory() . '/assets/css/admin.css';

        if (file_exists($admin_css_path)) {
            wp_enqueue_style(
                'admin-style',
                get_stylesheet_directory_uri() . '/assets/css/admin.css',
                [],
                filemtime($admin_css_path),
                'all'
            );
        }
    }
}
add_action('admin_enqueue_scripts', 'enqueue_admin_styles');
