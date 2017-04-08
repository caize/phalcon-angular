define(['app',
    'modules/index/services/Province',
    'common/services/common'
], function(app) {
    app.register.controller('IndexController',
    function($scope, $rootScope, $cookieStore, $state, Province, Modal) {
        $rootScope.pageTitle = 'Chợ Bắc Nam - Mua bán giá tốt cho mọi người';

        Modal.process(Province.getList({type:'get-all'}), function(res) {
            if(res.status)
                $scope.province = res.result;
        });
    });
});