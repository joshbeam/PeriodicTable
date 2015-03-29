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
			factor = 5,
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
					} else {
						throw new TypeError('scale must be string, and temperature must be a number');
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