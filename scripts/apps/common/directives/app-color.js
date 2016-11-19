define(['app'], function(app)
{
    app.directive('appColor', function($rootScope) {
        return {
            restrict: 'E', // E,A,C,M
            priority: 0,
            replace: true, // default false
            transclude: false, // default false
            scope: {
                content: '=attrContent',
                color: '@attrColor',
            },
            controller:
            [
                '$scope',
                function($scope) {
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                $rootScope.$on('COLOR', function(events, args) {
                    scope.color = args.color;
                    scope.content = args.content;
                })
            },
            template: '<h4 style="color:{{color}}">{{content}}</h4>'
        };
    })
});