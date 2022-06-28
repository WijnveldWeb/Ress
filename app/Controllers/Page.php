<?php
namespace Ress\Controllers;

use BoxyBird\Inertia\Inertia;
use Ress\Inc\CollectYoastMeta;
use StoutLogic\AcfBuilder\FieldsBuilder;
use Ress\Fields\FlexibleLayout;

class Page {
    public function acf_fields() {
        $page = new FieldsBuilder('page', ['hide_on_screen' => ['the_content']]);
        $page
            ->addFields(FlexibleLayout::getFields())
            ->setLocation('post_type', '==', 'page')
                ->or('post_type', '==', 'post');

        return $page;
    }
    public static function index() {
        // filter get_the_content so it return proper HTML tags
        $content = apply_filters( 'the_content', get_the_content());

        return Inertia::render('Page', [
            'yoast_meta' => CollectYoastMeta::collectMeta(get_the_ID()),
            'title' => get_the_title(),
            'content' => $content,
            'posts' => get_posts(),
            'acf_fields' => get_fields(),
        ]);
    }
}