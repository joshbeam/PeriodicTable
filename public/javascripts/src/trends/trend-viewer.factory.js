;(function(app) {
	'use strict';

	app
	.factory('trendViewer',trendViewer);

	trendViewer.$inject = ['utils','ELEMENT'];

	function trendViewer(utils,ELEMENT) {
		var WEIGHT = ELEMENT.WEIGHT,
			TYPE = ELEMENT.TYPE,
			GROUP = ELEMENT.GROUP,
			BP = ELEMENT.BP,
			MP = ELEMENT.MP,
			EN = ELEMENT.EN,
			VE = ELEMENT.VE,
			PHASE = ELEMENT.PHASE,
			views = [
				{
					name: TYPE,
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
						}[element[TYPE]];
					}
				},
				{
					name: WEIGHT,
					values: function(element) {
						return {
							fill: utils.shade('#c4ffd3',-(+element[WEIGHT])/400)
						};
					}
				},
				{
					name: VE,
					values: function(element) {
						var factor,
							type = element[TYPE],
							group = element[GROUP];

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
					name: PHASE,
					values: function(element) {
						var fill,
							temp = temperature.k,
							bp = element[BP],
							mp = element[MP],
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
					name: EN,
					values: function(element) {
						var fill;

						if(element[EN] === null) {
							fill = '#fff';
						} else {
							fill = utils.shade('#ebeba2',-(+element[EN])/6);
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