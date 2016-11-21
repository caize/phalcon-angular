<?php

namespace Anonymous\Frontend;

use Phalcon\Loader;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Db\Adapter\Pdo\Mysql as Database;
use Phalcon\Acl\Adapter\Memory as Acl;

class Module
{
    public function registerAutoloaders()
    {
        $loader = new Loader();
        $loader->registerNamespaces(array(
            'Anonymous\Frontend\Controllers' => APP_PATH.'frontend/controllers/',
            'Anonymous\Frontend\Models' => APP_PATH.'frontend/models/',
        ));
        $loader->register();
    }
    /**
     * Register the services here to make them general or register in the ModuleDefinition to make them module-specific
     */
    public function registerServices($di)
    {
        //Registering a dispatcher
        $di->set('dispatcher', function () {
            $dispatcher = new Dispatcher();
            //Attach a event listener to the dispatcher
            $eventManager = new \Phalcon\Events\Manager();
            $eventManager->attach('dispatch', new Acl('frontend'));
            $dispatcher->setDefaultNamespace("Anonymous\Frontend\Controllers\\");
            return $dispatcher;
        });
        //Registering the view component
        $di->set('view', function () {
            $view = new \Phalcon\Mvc\View();
            $view->setViewsDir(APP_PATH.'frontend/views/');
            $view->setLayoutsDir(APP_PATH.'layouts/');
            return $view;
        });
        $di->set('db', function () {
            return new Database(array(
                "host" => "localhost",
                "username" => "root",
                "password" => "11111",
                "dbname" => "dbslide",
                "charset"=>"utf8",
                "options" => array(
                    \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
                    \PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
                )
            ));
        });
    }
}