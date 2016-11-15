"use strict";

define(['app'], function(app)
{
    app.controller('HomeViewController',
    [
        '$scope', '$rootScope', 'getMusicID', 'getSong', '$cookieStore',

        function($scope, $rootScope, getMusicID, getSong, $cookieStore) {

            var title = "Mp3 get link";
            $rootScope.pageTitle = title;
            $scope.isShowResult = false;
            $scope.isShowPlay = false;
            $scope.songPath = "";

            $scope.action = function() {
                console.log('this is action');
            }

            $scope.page = {
                heading: title,
                subHeading: 'Search your song',
            };

            $scope.searchSong = function() {
                var params = {
                    type:'artist,song',
                    num:500,
                    query:$scope.namesong
                };
                getMusicID.get(params, function(res) {
                    if(res.result && res.data.length > 0) {
                        $scope.isShowResult = true;
                        $scope.listSong = res.data[1].song;
                    }
                });
            }; //END function searchSong

            $scope.listenSong = function(id) {
                var params = {
                    keycode: 'fafd463e2131914934b73310aa34a23f',
                    requestdata:'{"id":"'+id+'"}'
                };
                getSong.get(params, function(res) {
                    $scope.isShowPlay = true;
                    $scope.titleSong = res.title;
                    var sourceSong = Object.values(res.source);
                    $scope.songPath = (sourceSong[1].length > 0) ? sourceSong[1] : sourceSong[0];
                    $rootScope.pageTitle = title + ' - đang phát: ' + res.title;
                    document.getElementById("id-audio").load();
                });
            }; // END function listenSong

        } // END Root function
    ]);
});