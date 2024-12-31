<?php defined('ABSPATH') || exit;

// Csak a blokkszerkesztő eszközei
add_action('enqueue_block_editor_assets', function() {
    $app_js_path = get_stylesheet_directory() . '/blocks/button/build/index.js';
    $styles_css_path = get_stylesheet_directory() . '/blocks/button/build/style-index.css';

    // Blokk-szerkesztő JavaScript
    if (file_exists($app_js_path)) {
        wp_enqueue_script(
            'custom-block-editor-scripts',
            get_stylesheet_directory_uri() . '/blocks/button/build/index.js',
            ['wp-blocks', 'wp-element', 'wp-editor'], // Gutenberg függőségek
            filemtime($app_js_path),
            true // Modul mód
        );
    }

    // Blokk-szerkesztő CSS
    if (file_exists($styles_css_path)) {
        wp_enqueue_style(
            'custom-block-editor-styles',
            get_stylesheet_directory_uri() . '/blocks/button/build/style-index.css',
            [],
            filemtime($styles_css_path)
        );
    }
});
