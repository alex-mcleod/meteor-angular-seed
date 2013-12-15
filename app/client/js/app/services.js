'use strict';

angular.module('chatterServices', []).
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
  ]);