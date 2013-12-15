'use strict';

angular.module('meteorApp', [
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
  'chatterControllers',
  'chatterServices',
  'chatterModels',
  'chatterDirectives'
]).
  config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/base/home.html',
        controller: 'HomeCtrl',
        name: 'home'
      })
      .when('/about', {
        templateUrl: 'partials/base/about.html',
        controller: 'AboutCtrl',
        name: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
  constant('SITE_TITLE', 'Chatter');
