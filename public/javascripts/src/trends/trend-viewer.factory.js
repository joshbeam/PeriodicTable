;(function(app) {
	'use strict';

	app
	.factory('trendViewer',trendViewer);

	function trendViewer() {
		var views = [
				{
					name: 'Type',
					values: {
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
							fill: '#fab6b6'
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
					}
				}
			],
			factor = 6,
			exports = {
				currentView: views[0].name,
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
				views: views
			};

		return exports;
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