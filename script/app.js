define([
    'angularAMD',
    'routes/routes',
], function (angularAMD, config) {
    var app = angular.module('app', ['ui.router', 'ngResource', 'ngSanitize', 'ngMessages', 'ngAnimate', 'ngCookies', 'ngDialog', 'btford.socket-io', 'jQueryScrollbar']);

    app.constant('CONSTANT', {
        'API' :'http://phalcon-angular.dev/',
    });

    app.constant('BROADCAST', {
        'reloadTable':'reload-directive-table',
    });

    app.factory('Auth', function ($resource, CONSTANT) {
        return $resource(CONSTANT.API + 'user/signin', {}, {
            login: {
                method: 'POST'
            },
        });
    });

    app.factory('Authentical', function ($resource, CONSTANT) {
        return $resource(CONSTANT.API + 'user/authentical', {}, {
            check: {
                method: 'POST'
            },
        });
    });

    app.filter('range', function(){
        return function(n) {
            var res = [];
            for (var i = 1; i <= n; i++)
                res.push(i);
            return res;
        }
    });

    app.filter('num', function() {
        return function(input) {
          return parseInt(input, 10);
        };
    });

    app.filter('string', function() {
        return function(input) {
          return String(input);
        };
    });

    app.directive('form', function() {
        return {
            restrict: 'E',
            link: function(scope, elem) {
                elem.on('submit', function() {
                    scope.$broadcast('form:submit');
                });
            }
        };
    });

    app.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        '$httpProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
            $locationProvider.html5Mode(true).hashPrefix('*');
            if(config.routes !== undefined) {
                angular.forEach(config.routes, function(route, name) {
                    $stateProvider.state(name, route(angularAMD));
                });
                $stateProvider.state('404', {
                    views: {
                        'header': angularAMD.route({
                            templateUrl: 'script/modules/common/views/header.html',
                            controller: 'HeaderController',
                            controllerUrl: 'modules/common/controllers/HeaderController'
                        }),
                        'content': angularAMD.route({
                            templateUrl: 'script/modules/index/views/404.html',
                            controller: 'Pages404Controller',
                            controllerUrl: 'modules/index/controllers/Pages404Controller'
                        }),
                        'footer': angularAMD.route({
                            templateUrl: 'script/modules/common/views/footer.html',
                            controller: 'FooterController',
                            controllerUrl: 'modules/common/controllers/FooterController'
                        })
                    }
                });
            }
            $urlRouterProvider.otherwise(function($injector, $location){
               var state = $injector.get('$state');
               state.go('404');
               return $location.path();
            });
        }
    ]);

    app.config(['$cookiesProvider', '$httpProvider', function ($cookiesProvider, $httpProvider) {
        $cookiesProvider.defaults.domain = document.domain;
    }]);

    app.run(function($rootScope, $cookieStore, $http, $location, CONSTANT, $state, $stateParams) {
        $rootScope.to_slug = function(str) {
            if(str === undefined) return;
            str = str.toString().toLowerCase();
            str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
            str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
            str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
            str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
            str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
            str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
            str = str.replace(/(đ)/g, 'd');
            str = str.replace(/([^0-9a-z-\s])/g, '');
            str = str.replace(/(\s+)/g, '-');
            str = str.replace(/^-+/g, '');
            str = str.replace(/-+$/g, '');
            return str;
        };

        $rootScope.logout = function() {
            $cookieStore.remove('userInfo');
            return window.location.reload();
        }; // END logout

        $rootScope.getToken = function() {
            var data = ($cookieStore.get('userInfo') !== undefined) ? $cookieStore.get('userInfo') : '';
            return (data.token !== undefined) ? data.token : '';
        };
        $rootScope.getRole = function() {
            var data = ($cookieStore.get('userInfo') !== undefined) ? $cookieStore.get('userInfo') : '';
            return (data.userInfo !== undefined) ? data.userInfo.role : '';
        };

        $rootScope.$on('$stateChangeStart', function (event, current, next) {
            $http.defaults.headers.common["API-Token"] = $rootScope.getToken();
            var checkRouteValid = function() { return (current.name === '404') ? false : true; };
            var data = ($cookieStore.get('userInfo') !== undefined) ? $cookieStore.get('userInfo') : '';
            var params = {
                method: 'POST',
                url: CONSTANT.API + 'user/authentical',
                headers: { 'API-Token':data.token }
            };
            /*$http(params).then(
                function(res){
                    var status = (res.data.status !== undefined) ? res.data.status : false;
                    if(status)
                        $rootScope.logined = true;
                    else
                        $rootScope.logined = false;
                }, function(res){}
            );*/
        }); // END $routeChangeStart

        $rootScope.$on('$stateChangeSuccess', function(event, current, next){
            var checkRouteValid = function() { return (current.name === '404') ? false : true; };
        });

        $rootScope.$on('$viewContentLoaded', function(){
            // TODO
        });

    });
    angularAMD.bootstrap(app,false,document.getElementById('mainView'));
    return app;
});