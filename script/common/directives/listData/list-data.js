define(
    [
        'angularAMD',
        'common/services/common',
        'common/directives/dropDown/drop-down'
    ],
function(angularAMD)
{
    angularAMD.directive('listData', function($rootScope, $state, $location, BROADCAST, $stateParams, CONSTANT, Params, $location, Loading) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                settings: '=settings',
                deleteAction: '&',
                updateAction: '&',
                rankAction: '&',
            },
            templateUrl: 'script/common/directives/listData/view.html',
            controller: function($scope) {
                var _url = '/' + $state.current.name;
                $scope.stateName = $state.current.name;
                $scope.CONSTANT = CONSTANT;
                $scope.data_limit = [
                    {key: "10", value: '10 entries'},
                    {key: "20", value: '20 entries'},
                    {key: "50", value: '50 entries'},
                    {key: "100", value: '100 entries'},
                ];
                $scope.limit = ($stateParams.limit) ? $stateParams.limit : "10";
                $scope.page = ($stateParams.page) ? $stateParams.page : 1;
                $scope.keyword = ($stateParams.keyword) ? $stateParams.keyword : '';

                $scope.reloadData = function() {
                    $scope.settings.getData.getList({page:$scope.page, keyword:$scope.keyword, limit:$scope.limit}, function(res) {
                        if(res.status === true)
                            $scope.data = res.result;
                        else
                            $scope.data = res;
                    });
                    Loading.hide();
                }; // END reloadData
                $scope.reloadData();

                $scope.changePage = function(page) {
                    Loading.show();
                    $location.path(_url).search({page: page, keyword: $scope.keyword, limit:$scope.limit})
                };

                var keep_keyword = $scope.keyword;
                $scope.changeKeyword = function() {
                    if(keep_keyword !== $scope.keyword) {
                        Loading.show();
                        keep_keyword = $scope.keyword;
                        $scope.page = 1;
                        $location.path(_url).search({page: $scope.page, keyword: $scope.keyword, limit:$scope.limit})
                    }
                };

                $scope.changeLimit = function() {
                    Loading.show();
                    $location.path(_url).search({page: $scope.page, keyword: $scope.keyword, limit:$scope.limit})
                };

                $rootScope.$on(BROADCAST.reloadTable, function() {
                    $scope.reloadData();
                });
            },
            link: function(scope, element, attrs, ctrl) {}
        };
    })
});