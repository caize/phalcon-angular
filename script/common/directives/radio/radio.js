define(['angularAMD'], function(angularAMD)
{
    angularAMD.directive('radio', function($compile, $rootScope, $state, $location, BROADCAST) {
        return {
            restrict: 'E',
            // replace: true,
            require: 'ngModel',
            scope: {
                data: '=data',
                onChange: '&',
                ngModel: '=ngModel',
                key: '@key',
                value: '@value',
            },
            templateUrl: 'script/common/directives/radio/view.html',
            controller: function($scope) {},
            link: function(scope, element, attrs, ngModel) {
                if(scope.ngModel === '') scope.ngModel = null;
                scope.$on('form:submit', function() {
                    if(attrs.required) {
                        if(scope.ngModel === undefined || scope.ngModel === '') {
                            ngModel.$setValidity('required', false);
                        } else {
                            ngModel.$setValidity('required', true);
                        }
                    }
                });
            }
        };
    })
});