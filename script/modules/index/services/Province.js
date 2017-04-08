/**
 * @author: Code nay la cua ThePhuc
 * @since: 15/11/2016
 */
define(['app'], function (app) {
    app.register.factory('Province', function ($resource, CONSTANT, $rootScope) {
        return $resource(CONSTANT.API + 'user/province', {}, {
            getList: {method: 'GET'},
        });
    });
});