define([], function () {
    return {
        '/user': {
            templateUrl: 'scripts/apps/modules/user/views/index.html',
            dependencies: [
                'apps/modules/user/controllers/UserViewController',
                'apps/modules/user/services/user',
                'apps/common/directives/app-color'
            ]
        }
    }
});