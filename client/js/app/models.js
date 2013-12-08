'use strict';

angular.module('reviseModels', []).
  factory('Course', ['$resource', 'API_ROOT', function($resource, API_ROOT) {
      return $resource(API_ROOT + 'courses/:courseId', {courseId: '@courseId', format: 'json'}, {
          get: {method: 'GET', isArray: true}
      });
  }]);