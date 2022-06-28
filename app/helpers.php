<?php
/**
 * Need some helper functions? 
 * Put theme inside here this wil be included in functions.php
 *
 * @Ress
*/

// Get custom logo url.
function get_custom_logo_url()
{
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
    return $image[0];
}

/**
 * Simple function to pretty up our field partial includes.
 *
 * @param  mixed $partial
 * @return mixed
 */
function get_field_partial($partial)
{
    $partial = str_replace('.', '/', $partial);
    return include(get_template_directory()."/app/Fields/{$partial}.php");
}