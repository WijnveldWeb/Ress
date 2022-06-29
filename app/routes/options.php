<?php
use BoxyBird\Inertia\Inertia;
use StoutLogic\AcfBuilder\FieldsBuilder;

add_action('init', function () {


    $footer = new FieldsBuilder('footer', ['position' => 'acf_after_title']);

    $footer
        ->setLocation('options_page', '==', 'footer')
        ->addGroup('footer')
            ->addText('footer_text', ['label' => 'Footer Text'])
            ->addLink('phone_number', ['label' => 'Phone Number'])->setWidth(50)
            ->addLink('email', ['label' => 'Email'])->setWidth(50)
            ->addLink('bottom_left', ['label' => 'Bottom Left'])->setWidth(50)
            ->addLink('bottom_right', ['label' => 'Bottom Right'])->setWidth(50)
        ->endGroup();

    acf_add_local_field_group($footer->build());

    Inertia::share([
        'footer' => get_field('footer', 'options'),
    ]);
});