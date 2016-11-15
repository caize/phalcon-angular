"use strict";

define(['app'], function(app)
{
    app.controller('UserViewController',
    [
        '$scope', '$rootScope', '$cookieStore', 'Users',

        function($scope, $rootScope, $cookieStore, Users) {
            $scope.dataSource = {};
            $rootScope.pageTitle = "List Users";
            $scope.heading = 'List Users';

            var refreshData = function() {
                Users.get(function(res) {
                    $scope.dataSource = res;
                });
            };
            refreshData();

            $scope.save = function(myForm) {
                $scope.submitted = true;
                var params = {
                    fname: $scope.fname,
                    lname: $scope.lname,
                    username: $scope.username,
                    pass: $scope.pass,
                    role:0
                };
                if($scope.myForm.$valid) {
                    Users.create(params, function(res) {
                        if(res.status) {
                            refreshData();
                            myForm.$pristine = true;
                        }
                        $scope.result = res;
                    });
                }
            };

            $scope.delete = function(id) {
                Users.delete({id:id}, function(res) {
                    if(res.status)
                        refreshData();
                    $scope.result = res;
                });
            };
        }
    ]);
});