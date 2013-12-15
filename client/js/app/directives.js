'use strict';

angular.module('chatterDirectives', []).
	directive('stopEvent', function () {
		return {
	    restrict: 'A',
	    link: function (scope, element, attr) {
        element.bind(attr.stopEvent, function (e) {
          e.stopPropagation();
        });
	    }
		};
	});