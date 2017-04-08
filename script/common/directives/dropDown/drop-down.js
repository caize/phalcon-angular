define(['angularAMD'], function(angularAMD)
{
    angularAMD.directive('dropDown', function($rootScope, $state, $location, BROADCAST) {
        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                data: '=data',
                onChange: '&',
                ngModel: '=ngModel',
                key: '@key',
                value: '@value',
                setClass: '@',
            },
            templateUrl: 'script/common/directives/dropDown/view.html',
            controller: function($scope) {
            },
            link: function(scope, element, attrs, ngModel) {
                if(scope.setClass === undefined)
                    scope.setClass = 'form-control';

                scope.$on('form:submit', function() {
                    if(attrs.required) {
                        if(scope.ngModel === undefined || !scope.ngModel) {
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