<?php
namespace Ress\Controllers;

use BoxyBird\Inertia\Inertia;
use Ress\Inc\CollectYoastMeta;

class SingleProduct {
    public static function index() {
        // filter get_the_content so it return proper HTML tags
        $content = apply_filters( 'the_content', get_the_content());

        $product = wc_get_product( get_the_ID() );

        return Inertia::render('SingleProduct', [
            'yoast_meta' => CollectYoastMeta::collectMeta(get_the_ID()),
            'title' => get_the_title(),
            'thumbnail' => get_the_post_thumbnail_url(),
            'price' => [
                'regular' => $product->get_regular_price(),
                'sale' => $product->get_sale_price(),
            ],
            'stock' => $product->get_stock_status(),
            'add_to_cart' => get_add_to_cart_button($product),
            'content' => $content,
        ]);
    }
}