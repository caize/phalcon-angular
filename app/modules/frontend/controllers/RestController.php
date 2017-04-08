<?php
namespace Anonymous\Frontend\Controllers;
use Phalcon\Mvc\Controller;

class RestController extends Controller {

    public function resJSON($data) {
        $this->view->disable();
        $this->response->setContentType('application/json', 'UTF-8');
        $this->response->setJsonContent($data);
        $this->response->send();
    }

    public function calculateDate($from = '', $day) {
        if(!$from) $from = date('Y-m-d');
        $str_today = strtotime($from.$day);
        return date('Y-m-d', $str_today);
    }

    public function getTheDay($date) {
        $timestamp = strtotime($date);
        return date('D', $timestamp);
    }
}