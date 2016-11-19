"use strict";

define(['app'], function(app)
{
    app.controller('UserViewController',
    [
        '$scope', '$rootScope', '$cookieStore', 'Users',

        function($scope, $rootScope, $cookieStore, Users) {
            $rootScope.pageTitle = "List Users";
            $scope.dataSource = {};
            $scope.heading = 'List Users';

            var refreshData = function() {
                Users.getList(function(res) {
                    $scope.dataSource = res;
                });
            }; // END refreshData

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
            }; // END save

            $scope.delete = function(id) {
                Users.delete({id:id}, function(res) {
                    if(res.status)
                        refreshData();
                    $scope.result = res;
                });
            }; // END delete

        } // END function
    ]);
});