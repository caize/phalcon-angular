define(['app'], function(app)
{
    app.register.controller('Pages404Controller',
    function($scope, $rootScope, $cookieStore, $state) {
        $rootScope.pageTitle = "Page not found";
    });
});