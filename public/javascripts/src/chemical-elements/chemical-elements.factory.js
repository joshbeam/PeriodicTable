;(function(app,ChemicalElement) {

	'use strict';

	app
	.factory('chemicalElements',chemicalElements);

	chemicalElements.$inject = ['$http'];

	function chemicalElements($http) {

		var elements = [];

		Service.prototype = {
			populate: populate,
			getAll: getAll
		};

		return new Service();

		////////////////////////////

		function Service() {

		}

		function populate() {
			$http
			.get('elements.json')
			.then(function (JSONchemicalElements) {

				angular.forEach(JSONchemicalElements.data,function(element) {
					elements.push(new ChemicalElement(element));
				});
			});
		}

		function getAll() {
			return elements;
		}

	}

})(angular.module('periodicTable'),ChemicalElement);