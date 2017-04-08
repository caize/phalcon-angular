define([],
function () {
    var defaultRoute = {
        "index": function(angularAMD){
            return {
                url: "/",
                views: {
                    'header': angularAMD.route({
                        templateUrl: 'script/modules/common/views/header.html',
                        controller: 'HeaderController',
                        controllerUrl: 'modules/common/controllers/HeaderController'
                    }),
                    'content': angularAMD.route({
                        templateUrl: 'script/modules/index/views/index.html',
                        controller: 'IndexController',
                        controllerUrl: 'modules/index/controllers/IndexController'
                    }),
                    'footer': angularAMD.route({
                        templateUrl: 'script/modules/common/views/footer.html',
                        controller: 'FooterController',
                        controllerUrl: 'modules/common/controllers/FooterController'
                    })
                }
            };
        },
        "signin": function(angularAMD){
            return {
                url: "/signin",
                views: {
                    'header': angularAMD.route({
                        templateUrl: 'script/modules/common/views/header.html',
                        controller: 'HeaderController',
                        controllerUrl: 'modules/common/controllers/HeaderController'
                    }),
                    'content': angularAMD.route({
                        templateUrl: 'script/modules/signin/views/signin.html',
                        controller: 'SigninController',
                        controllerUrl: 'modules/signin/controllers/SigninController'
                    }),
                    'footer': angularAMD.route({
                        templateUrl: 'script/modules/common/views/footer.html',
                        controller: 'FooterController',
                        controllerUrl: 'modules/common/controllers/FooterController'
                    })
                }
            };
        }
    };
    return {
        defaultRoutePath: '/',
        routes: angular.extend({}, defaultRoute)
    };
});