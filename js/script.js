var ang = angular.module("studyModule", []);
ang.controller("studyCtrl", function ($scope, $http) {
	$scope.sortparam = "-date";
    $scope.getNews = function () {
        $http.get("data.json").success(function (responseData) {
            $scope.news = responseData;
        })
    };
});