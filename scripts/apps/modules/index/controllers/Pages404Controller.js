"use strict";

define(['app', 'apps/common/directives/app-color'], function(app)
{
    app.controller('Pages404Controller',
    [
        '$scope', '$rootScope',

        function($scope, $rootScope) {

            $rootScope.pageTitle = "Page not found";
            $scope.page =
            {
                heading: 'Page Not Found'
            };
        }
    ]);
});