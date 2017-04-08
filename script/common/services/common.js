/**
 * @author: Code nay la cua The Phuc
 * @since: 15/11/2016
 */
define(['app'], function (app) {

    app.register.service('Params', function () {
        this.get = function(parameterName) {
            var result = null, tmp = [];
            location.search.substr(1).split("&").forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
            return result;
        };
    });

    app.register.service('Modal', function ($rootScope, ngDialog, $timeout) {
        this.success = function(mes) {
            ngDialog.open({
                template: '<span class="success-status"><i class="glyphicon glyphicon-ok icon-success"></i> '+mes+'</span>',
                plain: true
            });
        };

        this.error = function(mes) {
            ngDialog.open({
                template: '<span class="error-status"><i class="glyphicon glyphicon-remove"></i> '+mes+'</span>',
                plain: true
            });
        };

        this.process = function(promise, callback) {
            let showError = function(mes) {
                ngDialog.open({
                    template: '<span><b>ERROR</b> <br>'+mes+'</span>',
                    plain: true
                });
            }
            ngDialog.open({
                template: '<span><b>Processing</b> <br> Please waiting...</span>',
                closeByDocument: false,
                closeByEscape: false,
                plain: true
            });
            promise.$promise.then(function (res) {
                callback(res);
                if(res.status) {
                    $timeout(function() {
                        ngDialog.close();
                    }, 1000);
                } else {
                    ngDialog.close();
                    if(res.message)
                        showError(res.message);
                }
            }, function (er) {
                ngDialog.close();
                showError(er.message);
            });
        };
    });
});