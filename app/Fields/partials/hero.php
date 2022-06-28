<?php

namespace Ress\Fields;

use StoutLogic\AcfBuilder\FieldsBuilder;

$hero = new FieldsBuilder('hero');

$hero
    ->addGroup('hero')
        ->addImage('image')->setWidth(50)
        ->addText('title')->setWidth(50)
        ->addRepeater('skills')
            ->addText('skill')
        ->endRepeater()
    ->endGroup();

return $hero;