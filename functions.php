<?php defined('ABSPATH') || exit;

function create_block_twentyfive_blocks_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_twentyfive_blocks_block_init' );

// ================================================================
// Enqueue Scripts
// ================================================================
require_once get_theme_file_path('./inc/enqueue.php');

// ================================================================
// Enqueue Admin Styles
// ================================================================
require_once get_theme_file_path('./inc/enqueue-admin.php');

// =========================================================================
// Register Custom Nav Menu
// =========================================================================
require_once get_theme_file_path('./inc/menu.php');

