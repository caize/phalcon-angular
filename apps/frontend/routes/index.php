<?php

$router->add("/api/:module/:controller/:action", [
    "module"     => 1,
    "controller" => 2,
    "action"     => 3,
]);

$router->add("/", array(
    'module' => 'frontend',
    'controller' => 'index',
    'action' => 'index',
));