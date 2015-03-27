;(function(app) {

	'use strict';

	app.
	directive('chemicalElement',chemicalElement);

	function chemicalElement() {
		var d = {
			restrict: 'A',
			link: link
		};

		function link(scope, el, attrs) {
			var element = scope.$eval(attrs.chemicalElement),
				$el = $(el[0]),
				factor = 5,
				svg = {
					width: 180*factor,
					height: 90*factor
				},
				rect = {
					width: svg.width/18,
					height: svg.height/9
				}

			$el.children('rect')
				.attr('x',element.group*rect.width)
				.attr('y',element.period*rect.height)
				.attr('width',rect.width)
				.attr('height',rect.height);
		}

		return d;
	}

})(angular.module('periodicTable'));