<?php
namespace Anonymous\Frontend\Controllers;
use Phalcon\Mvc\Controller;

class RestController extends Controller
{
    public function JsonResutl($data) {
        $this->view->disable();
        $this->response->setContentType('application/json', 'UTF-8');
        $this->response->setJsonContent($data);
        $this->response->send();
    }

    public function getPayload($name = null) {
        $params = json_decode(file_get_contents('php://input'), true);
        if($name)
            return isset($params[$name]) ? $params[$name] : false;
        return $params;
    }

    public function handle() {
        $this->view->disable();
        $action = $this->request->getQuery('action');
        if(!$action)
            return $this->JsonResutl(array('status'=>false, 'message'=>'Action is required!!!'));
        $this->$action();
    }
}