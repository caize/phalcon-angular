/**
 * @author: Code nay` la cua ThePhuc ^^
 * @since: 4/11/2016
 */
define(['app'], function (app) {

    app.factory('getMusicID', function ($resource) {
        return $resource('http://ac.mp3.zing.vn/complete', {}, {
            get: {method: 'GET', cancellable: true},
        });
    });

    app.factory('getSong', function ($resource) {
        return $resource('http://api.mp3.zing.vn/api/mobile/song/getsonginfo', {}, {
            get: {method: 'GET', cancellable: true},
        });
    });
});