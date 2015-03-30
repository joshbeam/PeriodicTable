;(function(app) {
	'use strict';
	
	app
	.config(config);
	
	config.$inject = ['$routeProvider'];
	
	function config($routeProvider) {
		$routeProvider.when('/:view',{
			templateUrl: 'periodic-table.html',
			controller: 'PeriodicTableController',
			controllerAs: 'vm',
			resolve: {
				elementsPrepService: elementsPrepService
			}
		})
		.when('/',{
			redirectTo: '/type'
		})
		.otherwise({
			redirectTo: '/type'
		});

		elementsPrepService.$inject = ['chemicalElements'];

		function elementsPrepService(chemicalElements) {
			// We don't need to call $http.get every time
			if(chemicalElements.getAll().length === 0) {
				return chemicalElements.populate();
			} else {
				return chemicalElements.getAll();
			}
		}
	}
})(angular.module('periodicTable'));

