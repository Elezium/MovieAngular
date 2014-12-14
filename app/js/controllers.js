'use strict';

/* Controllers */

angular.module('MovieManager.controllers', [])
    .controller('HomeController', ['$scope', function ($scope) {
        $scope.myname = "Myself.";

    }])

    .controller('MovieController', ['$scope', 'Restangular', function($scope, Restangular) {
        $scope.where = 'MovieController';


        $scope.movies = Restangular.all("Movies").getList().$object;
        console.log($scope.movies);
}]);







