'use strict';

angular.module('chatterControllers', []).
  controller('TitleCtrl', [
    '$scope', 
    'PageService', 
    function($scope, PageService) {
      $scope.$watch(function() {
          return PageService.getTitle();
      }, function(newValue, oldValue) {
          $scope.title = newValue;
      });
    }
  ]).
  controller('NavCtrl', [
    '$scope',
    '$NamedRouteService',
    'SITE_TITLE',
    function ($scope, $NamedRouteService, SITE_TITLE) {
      $scope.siteTitle = SITE_TITLE;
      $scope.links = [
        {href : $NamedRouteService.reverse('home'), text: 'Home'},
        {href : $NamedRouteService.reverse('about'), text: 'About'}
      ];
      // $scope.links.reverse();
      $scope.$watch('activeNavLink', function(newValue){
        _.each($scope.links, function(link){
          if (link.text.toLowerCase() === newValue.toLowerCase()) {
            link.active = true; 
          } else {
            link.active = false;
          }
        });
      });
    }
  ]).
  controller('HomeCtrl', [
    '$scope',
    '$meteor',
    'Messages',
    function ($scope, $meteor, Messages) {
      $scope.messages = Messages.find({});
    }
  ]).
  controller('AboutCtrl', [
    '$scope',
    function ($scope) {
      // Nothing.
    }
  ]).
  controller('CreateMessageCtrl', [
    '$scope',
    'Messages',
    function ($scope, Messages) {
      $scope.createmessage = function() {
        if ($scope.createMessageForm.$valid){
          Messages.insert({
            username : $scope.username,
            content : $scope.content
          });
        } 
      };
    }
  ]).
  controller('MessageListItemCtrl', [
    '$scope',
    'Messages',
    function ($scope, Messages) {
        // Nothing.
    }
  ]).
  controller('LoginCtrl', [
    '$scope',
    'Accounts',
    function ($scope, Accounts) {
      $scope.login = function() {
        if ($scope.loginForm.$valid){
          Accounts.loginWithPassword(
            $scope.email, 
            $scope.password,
            function(error) {
              console.log(error);
              // Handle login error.
            }
          );
        } 
      };
    }
  ]);







