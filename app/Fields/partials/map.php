<?php

namespace Ress\Fields;

use StoutLogic\AcfBuilder\FieldsBuilder;

$map = new FieldsBuilder('map');

$map
    ->addGroup('map')
        ->addText('title')
        ->addLink('link')
        ->addWysiwyg('text')
    ->endGroup();

return $map;