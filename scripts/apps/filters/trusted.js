/**
 * @author: Code nay la cua ThePhuc
 * @since: 4/11/2016
 */
define(['app'], function (app) {

    app.filter('trusted', ['$sce', function ($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);

});