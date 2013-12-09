'use strict';

angular.module('reviseControllers', []).
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
    'Courses',
    function ($scope, $meteor, Courses) {
      $scope.courses = Courses.find({});
    }
  ]).
  controller('AboutCtrl', [
    '$scope',
    function ($scope) {
      // Nothing.
    }
  ]).
  controller('CreateCourseCtrl', [
    '$scope',
    'Courses',
    function ($scope, Courses) {
      $scope.createCourse = function() {
        if ($scope.createCourseForm.$valid){
          Courses.insert({
            title : $scope.title,
            description : $scope.description
          });
        } 
      };
    }
  ]).
  controller('CourseListItemCtrl', [
    '$scope',
    'Courses',
    function ($scope, Courses) {
        // Nothing.
    }
  ]).
  controller('LoginCtrl', [
    '$scope',
    'Accounts',
    function ($scope, Accounts) {
        // Nothing.
    }
  ]);







