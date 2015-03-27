;(function(app) {

	'use strict';

	app.
	directive('chemicalElement',chemicalElement);

	chemicalElement.$inject = ['trendViewer'];

	function chemicalElement(trendViewer) {
		var d = {
			restrict: 'A',
			link: link
		};

		return d;

		function link(scope, el, attrs) {

			var element = scope.$eval(attrs.chemicalElement),
				$el = $(el[0]);

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
				var factor = config.factor,
					rect = {
						width: 10*factor,
						height: 10*factor
					},
					tspan = {
						x: coordinate('x')+(rect.width/2)
					};

				$el.children('rect')
					.attr('x',coordinate('x'))
					.attr('y',coordinate('y'))
					.attr('width',rect.width)
					.attr('height',rect.height)
					.attr('fill',fill);

				$el.children('text')
					.attr('x',coordinate('x'))
					.attr('y',coordinate('y'))
					.attr('text-anchor','middle');

				$el.children('text').children('.ce-atomic-number')
					.attr('x',tspan.x)
					.attr('font-size',rect.width*0.15)
					.attr('dy',rect.height*0.25);

				$el.children('text').children('.ce-symbol')
					.attr('x',tspan.x)
					.attr('font-size',rect.width*0.2)
					.attr('dy',rect.height*0.25);

				$el.children('text').children('.ce-element')
					.attr('x',tspan.x)
					.attr('font-size',rect.width*0.15)
					.attr('dy',rect.height*0.25);

				function fill() {
					var color;

					angular.forEach(trendViewer.views, function(view) {
						if(view.name === trendViewer.currentView) {
							color = view.values[element[trendViewer.currentView]].fill;
						}
					});

					return color;
				}

				function coordinate(xOrY) {
					var type = element['Type'],
						oddBall = type === 'Lanthanide' || type === 'Actinide',
						group = element['Group']-1,
						period = element['Period']-1,
						height = rect.height,
						width = rect.width;

					if(xOrY === 'y') {
						if(oddBall && group !== 3) {
							return (period+3)*height;
						} else {
							return period*height;
						}
					} else if (xOrY === 'x') {
						if(oddBall) {
							if(group >= 19) {
								return (group-16)*width;
							} else {
								return group*width;
							}
						} else {
							return group*width;
						}
					}
				}
			}
		}
	}

})(angular.module('periodicTable'));