<?php
namespace Ress\Controllers;

use BoxyBird\Inertia\Inertia;
use Ress\Inc\CollectYoastMeta;

class Shop {
    public static function index() {
        $products_query = new \WP_Query([
            'post_type' => 'product',
            'posts_per_page' => -1,
        ]);
        $products = [];
        if ( $products_query->have_posts() ) {
			while ( $products_query->have_posts() ) : $products_query->the_post();
                global $product;
                $products[] = [
                    'id' => get_the_ID(),
                    'title' => get_the_title(),
                    'image' => get_the_post_thumbnail_url(),
                    'url' => get_permalink(),
                    'add_to_cart' => get_add_to_cart_button($product)
                ];
				
			endwhile;
		} else {
			$products = null;
		}
        // echo '<pre>';
        // var_dump($products);
        // echo '</pre>';
        // die();
        return Inertia::render('Shop', [
            'yoast_meta' => CollectYoastMeta::collectMeta(get_the_ID()),
            'title' => get_the_title(),
            'products' => $products,
        ]);
    }
}