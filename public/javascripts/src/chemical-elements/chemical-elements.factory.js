;(function(app,ChemicalElement) {

	'use strict';

	app
	.factory('chemicalElements',chemicalElements);

	chemicalElements.$inject = ['$http'];

	function chemicalElements($http) {

		var elements = [];

		Service.prototype = {
			populate: populate,
			getAll: getAll,
			types: [
				'Nonmetal',
				'Noble Gas',
				'Alkali Metal',
				'Alkaline Earth Metal',
				'Metalloid',
				'Halogen',
				'Metal',
				'Transition Metal',
				'Lanthanide',
				'Actinide',
				'Transactinide'
			]
		};

		return new Service();

		////////////////////////////

		function Service() {

		}

		function populate() {
			return $http
					.get('elements.json')
					.then(function (JSONchemicalElements) {

						angular.forEach(JSONchemicalElements.data,function(element) {
							elements.push(new ChemicalElement(element));
						});

						return elements;
					});
		}

		function getAll() {
			return elements;
		}

	}

})(angular.module('periodicTable'),ChemicalElement);

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