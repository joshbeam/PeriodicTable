;(function(app) {
	'use strict';

	app
	.factory('trendViewer',trendViewer);

	trendViewer.$inject = ['utils'];

	function trendViewer(utils) {
		var views = [
				{
					name: 'Type',
					values: function(element) {
						return {
							'Nonmetal': {
								fill: '#bdfab6'
							},
							'Noble Gas': {
								fill: '#b6f5fa'
							},
							'Alkali Metal': {
								fill: '#c4b9b9'
							},
							'Alkaline Earth Metal': {
								fill: '#e6b5b5'
							},
							'Metalloid': {
								fill: '#f0fab6'
							},
							'Halogen': {
								fill: '#b6fae6'
							},
							'Metal': {
								fill: '#fac6b6'
							},
							'Transition Metal': {
								fill: '#fab6b6'
							},
							'Lanthanide': {
								fill: '#e89292'
							},
							'Actinide': {
								fill: '#de7e7e'
							},
							'Transactinide': {
								fill: '#fadab6'
							},
							'': {
								fill: '#fff'
							}
						}[element['Type']];
					}
				},
				{
					name: 'Atomic Weight',
					values: function(element) {
						return {
							fill: utils.shade('#c4ffd3',-(+element['Atomic Weight'])/400)
						};
					}
				},
				{
					name: 'Valence Electrons',
					values: function(element) {
						var factor,
							type = element['Type'],
							group = element['Group'];

						if((group >= 1 && group <= 12) && (type !== 'Lanthanide' && type !== 'Actinide')) {
							factor = group/30
						} else if(group >= 13 && group <= 18) {
							factor = (group-10)/30;	
						} else if (type === 'Lanthanide' || type === 'Actinide') {
							factor = 2/30;
						}
						
						return {
							fill: utils.shade('#e9aeda',-(factor))
						};
					}
				},
				{
					name: 'Phase',
					values: function(element) {
						var fill,
							temp = temperature.k,
							bp = element['Boiling Point (K)'],
							mp = element['Melting Point (K)'],
							solid = '#777',
							liquid = '#bbb',
							gas = '#f2f2f2',
							unknown = '#fff';

						if(bp === null && mp === null) {

							fill = unknown;

						} else if(mp === null && temp >= bp) {

							fill = gas;

						} else if(bp === null && temp >= mp) {

							fill = liquid;

						} else if(temp >= mp) {

							if(temp >= bp) {
								fill = gas;
							} else {
								fill = liquid;
							}

						} else {
							fill = solid;
						}

						return {
							fill: fill
						};
					}
				},
				{
					name: 'Electronegativity',
					values: function(element) {
						var fill;

						if(element['Electronegativity'] === null) {
							fill = '#fff';
						} else {
							fill = utils.shade('#ebeba2',-(+element['Electronegativity'])/6);
						}

						return {
							fill: fill
						};						
					}
				}
			],
			factor = 6,
			temperature = {
				k: 295,
				c: 21.85,
				f: 71.33
			},
			currentView = views[0].name,
			exports = {
				currentView: {
					get: function() {
						return currentView;
					},
					set: function(val) {
						currentView = val;
					}
				},
				factor: {
					get: function() {
						return factor;
					},
					up: function() {
						factor++;
					},
					down: function() {
						if(factor > 1) {
							factor--;
						}
					}
				},
				views: views,
				temperature: {
					set: setTemperature,
					get: getTemperature
				}
			};

		return exports;

		function setTemperature(config) {
			var temp = {};

			if(!!config) {
				if('scale' in config && 'temperature' in config) {
					if(typeof config.scale === 'string' && typeof config.temperature === 'number') {
						if(config.scale == 'c') {
							temp.c === config.temperature;
						} else if (config.scale == 'k') {
							temp.c = config.temperature - 273.15;
						} else if (config.scale == 'f') {
							temp.c = (config.temperature - 32)*(5/9);
						}

						temp.k = temp.c + 273.15;
						temp.f = (9/5)*(temp.c) + 32;
					}
				}
			}

			if(Object.keys(temp).length === 3) {
				temperature = temp;
			}

		}

		function getTemperature() {
			return temperature;
		}
	}

})(angular.module('periodicTable'));

	// 	var views = {
	// 		// doesn't follow recursive get pattern...
	// 		// maybe use getAll and get
	// 		get: function() {
	// 			return [
	// 				{
	// 					name: 'metallicCharacter',
	// 					// http://www.colorpicker.com/
	// 					values: {
	// 						nonmetal: {
	// 							fill: /*'#e3fab6'*/ '#bdfab6'
	// 						},
	// 						metalloid: {
	// 							fill: /*'#f7fab6'*/ '#f0fab6'
	// 						},
	// 						halogen: {
	// 							fill: /*'#b6facf'*/ '#b6fae6'
	// 						},
	// 						nobleGas: {
	// 							fill: '#b6f5fa'
	// 						},
	// 						alkali: {
	// 							fill: /*'#fab6b6'*/ '#c4b9b9'
	// 						},
	// 						alkaline: {
	// 							fill: /*'#faceb6'*/ '#e6b5b5'
	// 						},
	// 						transition: {
	// 							fill: /*'#fae4b6'*/ '#fab6b6'
	// 						},
	// 						postTransition: {
	// 							fill: /*'#ffce69'*/ '#fadab6'
	// 						},
	// 						lanthanoid: {
	// 							fill: /*'#fae4b6'*/ '#e89292'
	// 						},
	// 						actinoid: {
	// 							fill: /*'#ffce69'*/ '#de7e7e'
	// 						}
	// 					}
	// 				},
	// 				{
	// 					name: 'state',
	// 					// 1 = solid
	// 					// 2 = liquid
	// 					// 3 = gas
	// 					// 4 = unknown
	// 					values: {
	// 						1: {
	// 							fill: '#777'
	// 						},
	// 						2: {
	// 							fill: '#bbb'
	// 						},
	// 						3: {
	// 							fill: '#f2f2f2'
	// 						},
	// 						4: {
	// 							fill: '#fff'
	// 						}
	// 					}
	// 				}
	// 			];
	// 		}
	// 	};
		
	// 	return views;

	// }]);