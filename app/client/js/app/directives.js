'use strict';

angular.module('reviseDirectives', []).
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