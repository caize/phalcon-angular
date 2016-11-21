<?php
namespace Anonymous\Frontend\Controllers;
use Anonymous\Frontend\Models\User;

class IndexController extends RestController
{
    public function indexAction() {
        $this->view->setTemplateAfter('frontend');
    }
}