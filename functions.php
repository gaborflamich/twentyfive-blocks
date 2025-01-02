<?php defined('ABSPATH') || exit;

// =========================================================================
// Register Blocks
// =========================================================================
function twentyfive_blocks_init() {
	register_block_type( __DIR__ . '/build/sample' );
	register_block_type( __DIR__ . '/build/button' );
	register_block_type( __DIR__ . '/blocks/ctaButton' );
	register_block_type( __DIR__ . '/blocks/tickItem' );
}
add_action( 'init', 'twentyfive_blocks_init' );

// ================================================================
// Theme Customizations
// ================================================================
function theme_customizations() {
	// Add custom category for custom block
    add_filter('block_categories_all', function($categories, $post) {
        $categories[] = array(
            'slug' => 'wpflames',
            'title' => __('WPFlames', 'twentytwentyfive'),
            'icon' => null,
        );
        return $categories;
    }, 10, 2);
}
add_action('init', 'theme_customizations');


// ================================================================
// Enqueue Admin Styles
// ================================================================
require_once get_theme_file_path('./inc/enqueue-admin.php');

// =========================================================================
// Register Custom Nav Menu
// =========================================================================
require_once get_theme_file_path('./inc/menu.php');
