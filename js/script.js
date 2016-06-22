var ang = angular.module("studyModule", []);

ang.controller("studyCtrl", function ($scope, $http) {
	$scope.sortparam = "-date";
    $scope.getNews = function () {
        $http.get("data.json").success(function (responseData) {
        	$scope.news = responseData;
        })
    };
});

ang.filter("lengthOfString", function() {
	return function(news, limit) {
		var result = {};
		result = JSON.stringify(news);
		result = JSON.parse(result);
		for (var i in result) {
			result[i].text = result[i].text.slice(0, limit) + "...";
		}
		return result;
	};
});