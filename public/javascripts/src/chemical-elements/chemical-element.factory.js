;(function(app) {

	'use strict';

	app
	.factory('ChemicalElement',factory)

	factory.$inject = ['ELEMENT'];

	function factory(ELEMENT) {
		ChemicalElement.prototype = {
			getProperty: getProperty
		};

		////////////////

		function ChemicalElement(config) {
			this[ELEMENT.NAME] = config[ELEMENT.NAME];
			this[ELEMENT.SYMBOL] = config[ELEMENT.SYMBOL];
			this[ELEMENT.NUMBER] = +config[ELEMENT.NUMBER];
			this[ELEMENT.WEIGHT] = +config[ELEMENT.WEIGHT];
			this[ELEMENT.MP] = config[ELEMENT.MP];
			this[ELEMENT.BP] = config[ELEMENT.BP];
			this[ELEMENT.EN] = config[ELEMENT.EN];
			this[ELEMENT.TYPE] = config[ELEMENT.TYPE];
			this[ELEMENT.GROUP] = +config[ELEMENT.GROUP];
			this[ELEMENT.PERIOD] = +config[ELEMENT.PERIOD];
		}

		function getProperty(prop) {
			if(prop in this) {
				return this[prop];
			}
		}

		// function coordinate(atomicNumber) {
		// 	if(typeof atomicNumber !== 'number') {
		// 		throw SyntaxError('atomic number must be of type "number"');
		// 	}

		// 	if(atomicNumber >= 5 && atomicNumber <= 10) {

		// 		return [atomicNumber+8,2];

		// 	} else if(atomicNumber >= 13 && atomicNumber <= 18) {

		// 		return [atomicNumber,3];

		// 	} else if(atomicNumber >= 19 && atomicNumber <= 36) {

		// 		return [atomicNumber-18,4];

		// 	} else if(atomicNumber >= 37 && atomicNumber <= 54) {

		// 		return [atomicNumber-36,5];

		// 	} else if(atomicNumber >= 57 && atomicNumber <= 71) {

		// 		return [0,6];

		// 	} else if(atomicNumber >= 89 && atomicNumber <= 103) {

		// 		return [0,7];

		// 	} else if(atomicNumber >= 72 && atomicNumber <= 86) {

		// 		return [atomicNumber-68,6];

		// 	} else if(atomicNumber >= 104 && atomicNumber <= 118) {

		// 		return [atomicNumber-100,7];

		// 	} else {

		// 		return {
		// 			1: [1,1],
		// 			3: [1,2],
		// 			4: [2,2],
		// 			11: [1,3],
		// 			12: [2,3],
		// 			55: [1,6],
		// 			56: [2,6],
		// 			87: [1,7],
		// 			88: [2,7]
		// 		}[atomicNumber];

		// 	}
		// }

		return ChemicalElement;
	}

})(angular.module('periodicTable'));