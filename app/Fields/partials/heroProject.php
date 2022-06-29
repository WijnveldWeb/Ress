<?php

namespace Ress\Fields;

use StoutLogic\AcfBuilder\FieldsBuilder;

$heroProject = new FieldsBuilder('heroProject');

$heroProject
    ->addGroup('heroProject')
        ->addImage('image')->setWidth(50)
        ->addColorPicker('color')->setWidth(50)
    ->endGroup();

return $heroProject;