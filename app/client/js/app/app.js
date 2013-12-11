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
        templateUrl: 'views/base/home.html',
        controller: 'HomeCtrl',
        name: 'home'
      })
      .when('/about', {
        templateUrl: 'views/base/about.html',
        controller: 'AboutCtrl',
        name: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
  constant('SITE_TITLE', 'Revise');
