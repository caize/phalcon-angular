define([
    'apps/routes/user',
],
function (user) {
    var defaultRoute = {
        '/': {
            templateUrl: '/views/home.html',
            dependencies: [
                'apps/controllers/HomeViewController',
                'apps/directives/app-color',
                'apps/directives/app-color-v2',
                'apps/services/stealmp3',
                'apps/filters/trusted'
            ]
        },
        '/about/:person?': {
            templateUrl: '/views/about.html',
            dependencies: [
                'apps/controllers/AboutViewController',
                'apps/directives/app-color'
            ]
        }
    };
    return {
        defaultRoutePath: '/',
        routes: angular.extend({}, defaultRoute, user)
    };
});