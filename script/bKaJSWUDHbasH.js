require.config({
    baseUrl: "script",
    urlArgs: "v=" + (new Date()).getTime(),
    enableDebug: true,
    paths: {
        'angular':            'libs/angular/angular',
        'angularAMD':         'libs/angularAMD/angularAMD.min',
        'angular-ui-router':  'libs/angular-ui-router/angular-ui-router',
        'angular-resource':   'libs/angular-resource/angular-resource',
        'ngSanitize':         'libs/angular-sanitize/ngSanitize',
        'angular-cookies':    'libs/angular-cookies/angular-cookies',
        'angular-messages':   'libs/angular-messages/angular-messages',
        'angular-animate':    'libs/angular-animate/angular-animate.min',
        'angular-dialog':     'libs/angular-dialog/ngDialog.min',
        'angular-socket':     'libs/angular-socket/socket.min',
        'jquery':             '/public/js/jquery.min',
        'bootstrap-ui':       '/public/js/bootstrap.min',
        'material':           '/public/js/material.min',
        'scrollbar':          '/public/js/jquery.scrollbar.min',
        'init':               '/public/js/init',
    },
    waitSeconds: 0,
    shim: {
        angular: {
            exports: "angular"
        },
        'app': {
            deps: ['jquery', 'angular', 'angular-ui-router', 'angular-resource', 'ngSanitize', 'angular-cookies', 'angular-messages', 'angular-animate', 'angular-dialog', 'angular-socket', 'bootstrap-ui', 'material', 'scrollbar', 'init']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-ui-router': {
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
        'angular-dialog': {
            deps: ['angular']
        },
        'angular-socket': {
            deps: ['angular']
        },
        'bootstrap-ui': {
            deps: ['jquery']
        },
        'material': {
            deps: ['jquery', 'bootstrap-ui']
        },
        'scrollbar': {
            deps: ['jquery', 'angular']
        },
        'init': {
            deps: ['jquery', 'bootstrap-ui', 'material', 'angular']
        },
    },
    deps: ['app']
});