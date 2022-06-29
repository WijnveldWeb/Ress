<?php
namespace Ress\Controllers;

use BoxyBird\Inertia\Inertia;
use Ress\Inc\CollectYoastMeta;
use StoutLogic\AcfBuilder\FieldsBuilder;
use Ress\Fields\FlexibleLayout;


class ProjectenSingle {
    public function acf_fields() {
        $project = new FieldsBuilder('project');
        $project
            ->setLocation('post_type', '==', 'projecten')
                    ->addFields(FlexibleLayout::getFields());

        return $project;
    }
    public static function index() {
        // filter get_the_content so it return proper HTML tags
        $content = apply_filters( 'the_content', get_the_content());

        return Inertia::render('ProjectenSingle', [
            'yoast_meta' => CollectYoastMeta::collectMeta(get_the_ID()),
            'acf' => get_fields(),
            'title' => get_the_title(),
            'content' => $content,
        ]);
    }
}