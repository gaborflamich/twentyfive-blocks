<?php defined('ABSPATH') || exit;

// =========================================================================
// Register Blocks
// =========================================================================
function twentyfive_blocks_init() {
	register_block_type( __DIR__ . '/build/sample' );
	register_block_type( __DIR__ . '/build/button' );
	register_block_type( __DIR__ . '/blocks/ctaButton' );
}
add_action( 'init', 'twentyfive_blocks_init' );

// ================================================================
// Enqueue Admin Styles
// ================================================================
require_once get_theme_file_path('./inc/enqueue-admin.php');

// =========================================================================
// Register Custom Nav Menu
// =========================================================================
require_once get_theme_file_path('./inc/menu.php');
