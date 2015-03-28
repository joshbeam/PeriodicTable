;(function(app) {
	'use strict';

	app
	.directive('temperatureSlider',temperatureSlider);

	temperatureSlider.$inject = ['$rootScope','trendViewer'];

	function temperatureSlider($rootScope,trendViewer) {
		var d = {
			restrict: 'A',
			link: link
		};

		return d;

		function link(scope, element, attrs) {
			var $el = $(element[0]);
			console.log(trendViewer.temperature.get().k);

			$el
			.val(trendViewer.temperature.get().k)
			.attr('max',5000)
			.attr('step',10)
			.parent('li')
			.append('<span id="temperature-reading">'+trendViewer.temperature.get().k+'</span>');

			$el.on('change',function(e) {
				$('#temperature-reading').html($el.val());

				trendViewer.temperature.set({
					scale: 'k',
					temperature: $el.val()
				});
			});
		}
	}

})(angular.module('periodicTable'));