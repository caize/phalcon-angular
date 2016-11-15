define([], function () {
    return {
        '/user': {
            templateUrl: '/views/user.html',
            dependencies: [
                'apps/controllers/UserViewController',
                'apps/services/user',
                'apps/directives/app-color'
            ]
        }
    }
});