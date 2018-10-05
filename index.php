<?php

include_once 'settings.php';
include_once ROOT.'includes/elements.php';

$twig = initTwig();

echo $twig->render(
    'index.html.twig',
    []
);