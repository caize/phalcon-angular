<?php
namespace Multiple\Frontend\Models;

class User extends ModelBase
{
    public function getSource() {
        return 'user';
    }

    public static function insert($params) {
        if(self::findFirstByUsername($params['username']))
            return false;
        $obj = new self;
        foreach ($params as $key => $value){
            if($value !== '')
                $obj->$key = $value;
        }
        $obj->create();
        return true;
    }

    public static function updated($id, $params) {
        $obj = self::findFirstById($id);
        if(!$obj) return false;
        foreach ($params as $key => $value){
            if($value !== '')
                $obj->$key = $value;
        }
        $obj->save();
        return true;
    }
}