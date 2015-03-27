;(function(app) {

	'use strict';

	app
	.controller('PeriodicTableController',PeriodicTableController);

	PeriodicTableController.$inject = ['$scope','chemicalElements'];

	function PeriodicTableController($scope,chemicalElements) {
		var vm = this;

		activate();

		$scope.$watch(function() {
			return chemicalElements.getAll();
		}, function (newVal) {
			vm.chemicalElements = newVal;
		},true);

		function activate() {
			chemicalElements.populate();
		}
	}

})(angular.module('periodicTable'));