require.config({
    urlArgs: "v=" + (new Date()).getTime(),
    baseUrl: '/scripts',
    paths: {
        'underscore':        'lib/underscore/underscore',
        'angular':           'lib/angular/angular',
        'angular-route':     'lib/angular-route/angular-route',
        'angular-resource':  'lib/angular-resource/angular-resource',
        'ngSanitize':        'lib/angular-sanitize/ngSanitize',
        'angular-cookies':   'lib/angular-cookies/angular-cookies',
        'angular-messages':  'lib/angular-messages/angular-messages',
        'angular-animate':   'lib/angular-animate/angular-animate.min',
        'angular-ui-router': 'lib/angular-ui-router/angular-ui-router',
        'bootstrap':         'lib/bootstrap/js/bootstrap.min',
        'jquery':            'lib/jquery/jquery',
    },
    waitSeconds: 0,
    shim: {
        'app': {
            deps: ['angular', 'angular-route', 'angular-ui-router', 'angular-resource', 'ngSanitize', 'bootstrap', 'angular-cookies', 'angular-messages', 'angular-animate']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'ngSanitize': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'angular-messages': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require(['app'], function(app) {
    angular.bootstrap(document, ['app']);
});