angular.module("MyModule", [])
.controller("MyCtrl", function ($scope, $http) {
    //$http сервис позволяет работать с ajax
    $scope.getNews = function () {
        $http.get("data.json").success(function (responseData) {
            //вызвав метод get сервиса выполняем GET запрос
            $scope.fruits = dataresponseData;
            //полученные данные записываем в свойство products на $scope, далее AngularJS самостоятельно обновит все привязки
        })
    }
});