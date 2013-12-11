'use strict';

angular.module('reviseServices', []).
  factory('PageService', [
    'SITE_TITLE', 
    function(SITE_TITLE) {
      var title = SITE_TITLE;
      return {
        getTitle: function() { return title; },
        setTitle: function(newTitle) {
            title = newTitle + ' - ' + SITE_TITLE;
        }
      };
    }
  ]).
  factory('GenericModal', [
    '$modal', 
    function($modal) {
      return function(heading, content){
        var modalInstance = $modal.open({
          templateUrl: 'views/base/generic_modal.html'
        });
        return modalInstance;
      };
    }
  ]);