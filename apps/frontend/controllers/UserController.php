<?php
namespace Multiple\Frontend\Controllers;
use Multiple\Frontend\Models\User;

class UserController extends ControllerBase
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
        if($this->request->isPost()) {
            $params = $this->getPayload();
            $params['pass'] = $this->security->hash($params['pass']);
            $result = User::insert($params);
            if($result)
                return $this->JsonResutl(array('status'=>true));
            return $this->JsonResutl(array('status'=>false, 'message'=>'Insert new user failed!!!'));
        }
        return $this->JsonResutl(array('status'=>false, 'message'=>'Request invalid!!!'));
    }

    private function delete() {
        if($this->request->isPost()) {
            $params = $this->getPayload();
            $result = User::findFirstById($params['id'])->delete();
            if($result)
                return $this->JsonResutl(array('status'=>true));
            return $this->JsonResutl(array('status'=>false, 'message'=>'Delete failed!!!'));
        }
        return $this->JsonResutl(array('status'=>false, 'message'=>'Request invalid!!!'));
    }
}