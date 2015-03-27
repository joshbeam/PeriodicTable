;(function(app) {
	'use strict';

	app
	.directive('periodicTable',periodicTable);

	periodicTable.$inject = ['trendViewer'];

	function periodicTable(trendViewer) {
		var d = {
			restrict: 'A',
			link: link
		};

		return d;

		function link(scope, element, attrs) {
			var $el = $(element[0]);

			render({
				factor: trendViewer.factor.get()
			});

			scope.$on('factor.up',function(e,factor) {
				render({
					factor: factor
				});
			});

			scope.$on('factor.down',function(e,factor) {
				render({
					factor: factor
				});				
			});

			function render(config) {
				var factor = config.factor;

				$el
				.attr('width',180*factor)
				.attr('height',100*factor);				
			}

		}
	}

})(angular.module('periodicTable'));