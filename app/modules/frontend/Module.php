<?php

namespace Anonymous\Frontend;

use Phalcon\Loader;
use Phalcon\Mvc\Dispatcher;
use Phalcon\Db\Adapter\Pdo\Mysql as Database;
use Phalcon\Acl\Adapter\Memory as Acl;

class Module {
    public function registerAutoloaders() {
        $loader = new Loader();
        $loader->registerNamespaces(array(
            'Anonymous\Frontend\Controllers' => APP_PATH.'modules/frontend/controllers/',
            'Anonymous\Models' => APP_PATH.'models/',
        ));
        $loader->register();
    }

    public function registerServices($di) {
        $di->set('dispatcher', function () {
            $dispatcher = new Dispatcher();
            $eventManager = new \Phalcon\Events\Manager();
            $eventManager->attach('dispatch', new Acl('frontend'));
            $dispatcher->setDefaultNamespace("Anonymous\Frontend\Controllers\\");
            return $dispatcher;
        });
        $di->set('view', function () {
            $view = new \Phalcon\Mvc\View();
            $view->setViewsDir(APP_PATH.'modules/frontend/views/');
            return $view;
        });
        $di->set('db', function () {
            return new Database(array(
                "host"     => getenv('DB_HOST'),
                "username" => getenv('DB_USER'),
                "password" => getenv('DB_PASS'),
                "dbname"   => getenv('DB_NAME'),
                "charset"  =>"utf8",
                "options"  => array(
                    \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
                    \PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
                )
            ));
        });
    }
}