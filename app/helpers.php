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

function get_add_to_cart_button($product) {
    return sprintf( '<a href="%s" data-quantity="1" class="%s" %s>%s</a>',
        esc_url( $product->add_to_cart_url() ),
        esc_attr( implode( ' ', array_filter( array(
            'button', 'product_type_' . $product->get_type(),
            $product->is_purchasable() && $product->is_in_stock() ? 'add_to_cart_button' : '',
            $product->supports( 'ajax_add_to_cart' ) ? 'ajax_add_to_cart' : '',
        ) ) ) ),
        wc_implode_html_attributes( array(
            'data-product_id'  => $product->get_id(),
            'data-product_sku' => $product->get_sku(),
            'aria-label'       => $product->add_to_cart_description(),
            'rel'              => 'nofollow',
        ) ),
        esc_html( $product->add_to_cart_text() )
    );
}