<?php

use Phalcon\Loader;
use Phalcon\Mvc\Router;
use Phalcon\DI\FactoryDefault;
use Phalcon\Mvc\Application as BaseApplication;
require 'defined.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

class Application extends BaseApplication
{
    protected function registerServices()
    {
        $di = new FactoryDefault();
        $loader = new Loader();
        $loader->registerDirs(
            array(
                APP_PATH.'librarys/'
            )
        )->register();
        $di->set('router', function(){
            $router = new Router(false);
            $router->setDefaultModule("frontend");
            $router->setDefaultController('index');
            $router->setDefaultAction('index');
            $routes = glob("app/modules/**/routes/*.php");
            foreach ($routes as $key => $value) require $value;
            $router->removeExtraSlashes(true);
            $router->handle();
            return $router;
        });
        $di->set('url', function() {
            $url = new \Phalcon\Mvc\Url();
            $url->setBaseUri('/');
            return $url;
        });
        $this->setDI($di);
    }

    public function main()
    {
        $this->registerServices();
        $this->registerModules(array(
            'frontend' => array(
                'className' => 'Anonymous\Frontend\Module',
                'path' => 'app/modules/frontend/Module.php'
            )
        ));
        echo $this->handle()->getContent();
    }
}

try {
    $application = new Application();
    $application->main();
} catch(\Exception $e) {
    echo $e->getMessage();
}