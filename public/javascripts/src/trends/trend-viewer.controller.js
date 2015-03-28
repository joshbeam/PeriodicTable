;(function(app) {

	'use strict';

	app
	.controller('TrendViewerController',TrendViewerController);

	TrendViewerController.$inject = ['$scope','$route','$location','trendViewer'];

	function TrendViewerController($scope,$route,$location,trendViewer) {
		var vm = this;

		vm.views = trendViewer.views;
		vm.changeView = changeView;

		$scope.$watch(function() {
			if('current' in $route) {
				return $route.current.params.view;
			}
		}, function(r) {
			trendViewer.currentView.set(r);
			vm.currentView = r;
		});

		function changeView(name) {
			$location.path(name);
		}
	}

})(angular.module('periodicTable'));