<?php
namespace Anonymous\Models;

class User extends \Phalcon\Mvc\Model {
    public $id;
    public $fname;
    public $lname;
    public $username;
    public $pass;
    public $role;

    public function getSource() {
        return 'user';
    }

    public static function find($parameters = null) {
        return parent::find($parameters);
    }

    public static function findFirst($parameters = null) {
        return parent::findFirst($parameters);
    }
}