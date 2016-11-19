define([
    'apps/routes/user',
],
function (user) {
    var defaultRoute = {
        '/': {
            templateUrl: 'scripts/apps/modules/index/views/home.html',
            dependencies: [
                'apps/modules/index/controllers/HomeViewController',
                'apps/modules/index/services/stealmp3',
                'apps/common/directives/app-color',
                'apps/common/directives/app-color-v2',
                'apps/common/filters/trusted'
            ]
        },
        '/about/:person?': {
            templateUrl: 'scripts/apps/modules/index/views/about.html',
            dependencies: [
                'apps/modules/index/controllers/AboutViewController',
                'apps/common/directives/app-color'
            ]
        }
    };
    return {
        defaultRoutePath: '/',
        routes: angular.extend({}, defaultRoute, user)
    };
});