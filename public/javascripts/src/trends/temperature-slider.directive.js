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
			var $el = $(element[0]),
				$reading = $('#temperature-reading'),
				startingTemp = trendViewer.temperature.get().k;

			$el
			.val(startingTemp)
			.rangeslider({
				polyfill: false,
				onSlide: function(pos,val) {
					change(val);
				}
			});

			$reading
			.val(startingTemp);

			showTemperatureReading();

			$el.on('change',function(e) {
				change(+$el.val(),e);
			});

			$reading.on('change',function(e) {
				change(+$reading.val(),e);
			});

			function change(val,e) {
				trendViewer.temperature.set({
					scale: 'k',
					temperature: val
				});

				showTemperatureReading(e);

				$rootScope.$broadcast('temperature.change',trendViewer.temperature.get().k);				
			}

			function showTemperatureReading(e) {
				var temperatureObj = trendViewer.temperature.get(),
					temperature = temperatureObj.k,
					c = Math.floor(temperatureObj.c),
					f = Math.floor(temperatureObj.f),
					qualifier = ' K = '
								+c+
								'&deg;C = '
								+f+
								'&deg;F';

				if(temperature >= 290 && temperature <= 300) {
					qualifier+=' = room temperature';
				}

				if(!!e) {
					if(e.target === $reading[0]) {
						$el.val(temperature).change();
					} else if (e.target === $el[0]) {
						$reading.val(temperature);
					}
				} else {
					$reading.val(temperature);
				}


				$('#temperature-reading-label').html(qualifier);
			}
		}
	}

})(angular.module('periodicTable'));