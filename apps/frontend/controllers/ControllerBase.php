<?php
namespace Multiple\Frontend\Controllers;
use Phalcon\Mvc\Controller;

class ControllerBase extends Controller
{
    public function JsonResutl($data) {
        $this->view->disable();
        $this->response->setContentType('application/json', 'UTF-8');
        $this->response->setJsonContent($data);
        $this->response->send();
    }

    public function getPayload() {
        return json_decode(file_get_contents('php://input'), true);
    }
}