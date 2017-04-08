define(['app'], function(app)
{
    app.register.controller('SigninController',
    function($scope, $rootScope, Auth, $cookieStore, $state) {
        $rootScope.pageTitle = "Đăng nhập Chợ Bắc Nam";
        $scope.test = "this is test";

        $scope.submit = function() {
            $scope.submitted = true;
            if($scope.login_form.$valid) {
                var params = {
                    'email':$scope.username,
                    'password':$scope.password
                };
                Auth.login(params, function(res, headers) {
                    if(!res.status) {
                        $scope.error_login = res.message;
                    } else {
                        if(headers('API-Token') !== undefined && headers('API-Token') !== null) {
                            var data = {
                                userInfo:res.userInfo,
                                token:headers('API-Token')
                            };
                            $cookieStore.put('userInfo', data);
                            delete $scope.error_login;
                            return $state.go('index');
                        } else {
                            $scope.error_login = 'Lỗi đăng nhập!!!';
                        }
                    }
                });
            }
        };
    });
});