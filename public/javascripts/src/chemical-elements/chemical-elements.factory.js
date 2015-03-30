;(function(app) {

	'use strict';

	app
	.factory('chemicalElements',chemicalElements);

	chemicalElements.$inject = ['$http','ChemicalElement'];

	function chemicalElements($http,ChemicalElement) {

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
					.get('camelizedElements.json')
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

})(angular.module('periodicTable'));