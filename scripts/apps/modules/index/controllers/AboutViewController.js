"use strict";

define(['app'], function(app)
{
    app.controller('AboutViewController',
    [
        '$scope', '$rootScope', '$routeParams',

        function($scope, $rootScope, $routeParams) {

            $scope.person = $routeParams.person;
            $rootScope.pageTitle = "About - " + $routeParams.person;
            $scope.page =
            {
                heading: 'About Us'
            };
        }
    ]);
});