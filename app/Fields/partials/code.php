<?php

namespace Ress\Fields;

use StoutLogic\AcfBuilder\FieldsBuilder;

$code = new FieldsBuilder('code');

$code
    ->addGroup('code')
        ->addText('title')
        ->addWysiwyg('text')->setWidth(50)
        ->addRepeater('skills')
            ->setWidth(50)
            ->addText('name')
        ->endRepeater()
    ->endGroup();

return $code;