<?php
/**
 * Created by IntelliJ IDEA.
 * User: deisibonilla
 * Date: 10/5/18
 * Time: 2:19 PM
 */

function initTwig() {
    $loader = new \Twig_Loader_Filesystem(array_unique([ROOT . 'FrontEnd/Template']));
    $twig   = new \Twig_Environment(
        $loader,
        array(
            'cache' => false,
            'debug' => true,
        )
    );
    $twig->addExtension(new \Twig_Extension_Debug());

    return $twig;
}