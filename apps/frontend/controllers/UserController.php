<?php
namespace Multiple\Frontend\Controllers;
use Multiple\Frontend\Models\User;

class UserController extends RestController
{
    public function handleAction() {
        $this->view->disable();
        $action = $this->request->getQuery('action');
        if(!$action)
            return $this->JsonResutl(array('status'=>false, 'message'=>'Action is required!!!'));
        $this->$action();
    }

    private function getList() {
        $data = User::find()->toArray();
        if($data)
            return $this->JsonResutl(array('status'=>true, 'data'=>$data));
        return $this->JsonResutl(array('status'=>false, 'message'=>'Have no data!!!'));
    }

    private function create() {
        $this->requiredPost();

        $params = $this->getPayload();
        $params['pass'] = $this->security->hash($params['pass']);
        $result = User::insert($params);
        if($result)
            return $this->JsonResutl(array('status'=>true));
        return $this->JsonResutl(array('status'=>false, 'message'=>'Insert new user failed!!!'));
    }

    private function delete() {
        $this->requiredPost();

        $params = $this->getPayload();
        $result = User::findFirstById($params['id'])->delete();
        if($result)
            return $this->JsonResutl(array('status'=>true));
        return $this->JsonResutl(array('status'=>false, 'message'=>'Delete failed!!!'));
    }
}