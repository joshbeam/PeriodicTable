;(function(app) {

	'use strict';

	app
	.controller('PeriodicTableController',PeriodicTableController);

	PeriodicTableController.$inject = ['$scope','$route','$location','elementsPrepService','ELEMENT'];

	function PeriodicTableController($scope,$route,$location,elementsPrepService,ELEMENT) {
		var vm = this;

		vm.chemicalElements = elementsPrepService;
		vm.ELEMENT = ELEMENT;
	}

})(angular.module('periodicTable'));