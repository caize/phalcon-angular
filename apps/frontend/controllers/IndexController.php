<?php
namespace Multiple\Frontend\Controllers;
use Multiple\Frontend\Models\User;

class IndexController extends ControllerBase
{
    public function indexAction() {
        $this->view->setTemplateAfter('frontend');
    }
}