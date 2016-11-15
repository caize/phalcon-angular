/**
 * @author: Code nay la cua ThePhuc
 * @since: 15/11/2016
 */
define(['app'], function (app) {

    app.factory('Users', function ($resource) {
        return $resource('/api/frontend/user/handle', {}, {
            get:    {method: 'GET', params: {action:'getList'}},
            create: {method: 'POST', params: {action:'create'}},
            delete: {method: 'POST', params: {action:'delete'}},
        });
    });

});