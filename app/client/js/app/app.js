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
  'ui',
  'ui.bootstrap',
  // App
  'reviseControllers',
  'reviseServices',
  'reviseModels',
  'reviseDirectives'
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
  constant('SITE_TITLE', 'Revise');
