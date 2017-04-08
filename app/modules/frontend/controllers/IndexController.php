<?php
namespace Anonymous\Frontend\Controllers;
use Anonymous\Models\User;

class IndexController extends RestController
{
    public function indexAction() {
        $this->assets->addCss("public/css/bootstrap.min.css");
        $this->assets->addCss("public/css/bootstrap-material-design.css");
        $this->assets->addCss("public/css/font-awesome.min.css");
        $this->assets->addCss("public/css/ripples.min.css");
        $this->assets->addCss("public/css/jquery.scrollbar.css");
        $this->assets->addCss("public/css/ngDialog.min.css");
        $this->assets->addCss("public/css/ngDialog-theme-default.min.css");
        $this->assets->addCss("public/css/style.css");
    }
}