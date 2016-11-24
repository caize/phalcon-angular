<?php
namespace Anonymous\Frontend\Controllers;
use Anonymous\Frontend\Models\User;

class UserController extends RestController
{
    public function handleAction() {
        $this->handle();
    }

    protected function checkExistUser() {
        if(!$this->request->isPost())
            return $this->JsonResutl(array('status'=>false, 'message'=>'Request invalid!!!'));

        $keyword = $this->getPayload('keyword');
        $data = User::findFirstByUsername($keyword);
        if($data)
            return $this->JsonResutl(array('status'=>true));
        return $this->JsonResutl(array('status'=>false));
    }

    protected function findLike() {
        if(!$this->request->isPost())
            return $this->JsonResutl(array('status'=>false, 'message'=>'Request invalid!!!'));

        $keyword = $this->getPayload('keyword');
        $data = User::find(array(
            'conditions' => 'username LIKE :value:',
            'bind' => array('value' => '%' . $keyword . '%'),
        ))->toArray();
        if($data)
            return $this->JsonResutl(array('status'=>true, 'data'=>$data));
        return $this->JsonResutl(array('status'=>false, 'message'=>'Have no data!!!'));
    }

    protected function getList() {
        $data = User::find()->toArray();
        if($data)
            return $this->JsonResutl(array('status'=>true, 'data'=>$data));
        return $this->JsonResutl(array('status'=>false, 'message'=>'Have no data!!!'));
    }

    protected function create() {
        if(!$this->request->isPost())
            return $this->JsonResutl(array('status'=>false, 'message'=>'Request invalid!!!'));

        $params = $this->getPayload();
        $params['pass'] = $this->security->hash($params['pass']);
        $result = User::insert($params);
        if($result)
            return $this->JsonResutl(array('status'=>true));
        return $this->JsonResutl(array('status'=>false, 'message'=>'Insert new user failed!!!'));
    }

    protected function delete() {
        if(!$this->request->isPost())
            return $this->JsonResutl(array('status'=>false, 'message'=>'Request invalid!!!'));

        $id = $this->getPayload('id');
        $result = User::findFirstById($id);
        if($result->delete())
            return $this->JsonResutl(array('status'=>true));
        return $this->JsonResutl(array('status'=>false, 'message'=>'Delete failed!!!'));
    }
}