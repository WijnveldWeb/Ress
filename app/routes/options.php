<?php
use BoxyBird\Inertia\Inertia;
use StoutLogic\AcfBuilder\FieldsBuilder;

add_action('init', function () {


    $footer = new FieldsBuilder('footer', ['position' => 'acf_after_title']);

    $footer
        ->setLocation('options_page', '==', 'footer')
        ->addGroup('footer')
            ->addText('footer_text', ['label' => 'Footer Text'])
        ->endGroup();

    acf_add_local_field_group($footer->build());

    Inertia::share([
        'footer' => get_field('footer', 'options'),
    ]);
});