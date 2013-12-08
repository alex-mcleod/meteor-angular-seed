'use strict';

angular.module('reviseApp', [
  // Angular
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  // Vendor
  'meteor',
  'zj.namedRoutes',
  // App
  'reviseControllers',
  'reviseServices',
  'reviseModels'
]).
  config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        name: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        name: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
  constant('API_ROOT', '/api/v1/').
  constant('SITE_TITLE', 'Revise');
