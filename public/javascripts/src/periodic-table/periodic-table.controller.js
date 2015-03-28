;(function(app) {

	'use strict';

	app
	.controller('PeriodicTableController',PeriodicTableController);

	PeriodicTableController.$inject = ['$scope','$route','$location','elementsPrepService','trendViewer'];

	function PeriodicTableController($scope,$route,$location,elementsPrepService,trendViewer) {
		var vm = this;

		vm.chemicalElements = elementsPrepService;
	}

})(angular.module('periodicTable'));