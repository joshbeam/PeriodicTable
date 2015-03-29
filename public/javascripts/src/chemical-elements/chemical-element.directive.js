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
				$el = $(el[0]),
				$rect = $el.children('rect'),
				$text = $el.children('text'),
				$atomicNumber = $text.children('.ce-atomic-number'),
				$symbol = $text.children('.ce-symbol'),
				$elementName = $text.children('.ce-element'),
				$weight = $text.children('.ce-atomic-weight'),
				render = {
					all: all,
					scale: scale,
					fill: fill
				};

			render.all({factor: trendViewer.factor.get()});

			scope.$on('factor.change',function(e,factor) {
				render.scale({factor: factor});
			});

			scope.$on('temperature.change',function() {
				render.fill();
			});

			function all(config) {
				scale(config);
				fill();
			}

			function scale(config) {
				var factor = config.factor,
					rect = {
						width: 10*factor,
						height: 10*factor
					},
					tspan = {
						x: coordinate('x')+(rect.width/2)
					};

				// scale
				$rect
					.attr('width',rect.width)
					.attr('height',rect.height);

				$atomicNumber
					.attr('font-size',rect.width*0.15)
					.attr('dy',rect.height*0.20);

				$symbol
					.attr('font-size',rect.width*0.2)
					.attr('dy',rect.height*0.25);

				$elementName
					.attr('font-size',rect.width*0.12)
					.attr('dy',rect.height*0.20);

				$weight
					.attr('font-size',rect.width*0.15)
					.attr('dy',rect.height*0.20);

				// position
				$rect
					.attr('x',coordinate('x'))
					.attr('y',coordinate('y'));

				$text
					.attr('x',coordinate('x'))
					.attr('y',coordinate('y'))
					.attr('text-anchor','middle');

				$atomicNumber
					.attr('x',tspan.x);

				$symbol
					.attr('x',tspan.x);

				$elementName
					.attr('x',tspan.x);

				$weight
					.attr('x',tspan.x);


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

			function fill() {
				$rect
					.attr('fill',bg);

				function bg() {
					var color;

					angular.forEach(trendViewer.views, function(view) {
						if(view.name === trendViewer.currentView.get()) {
							color = view.values(element).fill;
						}
					});

					return color;					
				}
			}

		}
	}

})(angular.module('periodicTable'));