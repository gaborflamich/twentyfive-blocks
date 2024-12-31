<?php defined( 'ABSPATH' ) || exit;

// =========================================================================
// Register Custom Nav Menu
// =========================================================================
if ( ! function_exists( 'wpflames_register_nav_menu' ) ) {

	function wpflames_register_nav_menu(){
		register_nav_menus( array(
	    	'main-menu' => esc_html__( 'Main Menu', 'wpflames' ),
		) );
	}
	add_action( 'after_setup_theme', 'wpflames_register_nav_menu', 0 );
}