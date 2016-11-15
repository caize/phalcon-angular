define(['app'], function(app)
{
    app.directive('appColorV2', function() {
        return {
            restrict: 'E', // E,A,C,M
            priority: 0,
            replace: false, // default false
            transclude: true, // default false
            scope: {
                content: '=attrContent', // receive value from scope
                color: '@attrColor', // connect value of scope & attribute html
                action: '&attrAction' // function
            },
            controller:
            [
                '$scope', '$rootScope',
                function($scope, $rootScope) {
                    $scope.myaction = function() {
                        $scope.action();
                        var result = ['red', 'blue', 'green', 'black'][Math.floor(Math.random() * 4)];
                        $rootScope.$broadcast('COLOR', {color:result, content:"Content is changed"});
                    };
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                //
            },
            template: '<h1 style="color:{{color}};cursor: pointer" ng-click="myaction()">{{content}}</h1> <div ng-transclude></div>'
        };
    })
});