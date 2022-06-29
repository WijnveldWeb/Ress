<?php
namespace Ress\Fields;

use StoutLogic\AcfBuilder\FieldsBuilder;

class FlexibleLayout {
    public static function getFields() {
        $flexible = new FieldsBuilder('flexible');

        $hero = get_field_partial('partials.hero');
        $heroProject = get_field_partial('partials.heroProject');
        $map = get_field_partial('partials.map');
        $code = get_field_partial('partials.code');

        $flexible
            ->addFlexibleContent('flexible', ['button_label' => 'Add layout'])
                ->addLayout($heroProject)
                ->addLayout($hero)
                ->addLayout($map)
                ->addLayout($code)
            ->endFlexibleContent();

        return $flexible;
    }
}