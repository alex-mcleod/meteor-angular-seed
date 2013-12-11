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
    'GenericModal',
    'Accounts',
    function ($scope, GenericModal, Accounts) {
      // var modalInstance = $modal.open({
      //   templateUrl: 'myModalContent.html',
      //   controller: ModalInstanceCtrl,
      //   resolve: {
      //     items: function () {
      //       return $scope.items;
      //     }
      //   }
      // });
      $scope.openResponseModal = function(response) {
          var modalInstance = new GenericModal('hello', 'world');
          console.log(modalInstance);
      }
      $scope.login = function() {
        if ($scope.loginForm.$valid){
          Accounts.loginWithPassword(
            $scope.email, 
            $scope.password,
            function(error) {
              console.log(error);
              //$scope.openResponseModal();
            }
          );
        } 
      };
    }
  ]);







