'use strict';


// Declare app level module which depends on filters, and services
angular.module('MovieManager', [
    'restangular',
    'ui.router',
    'MovieManager.filters',
    'MovieManager.services',
    'MovieManager.directives',
    'MovieManager.controllers'

]).
    config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {


        // API Url (Should be a var... Dev / Prod
        RestangularProvider.setBaseUrl('http://roilan2movies.azurewebsites.net/api');

        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/home.html",
                controller: "HomeController"
            })
            .state('MovieManager', {
                url: "/movies",
                templateUrl: "partials/movies.html",
                controller: "MovieController"
            });
//            .state('login', {
//                url: "/login",
//                templateUrl: "partials/login.html",
//                controller: "AuthController"
//            })

    });