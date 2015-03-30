;(function(app) {

	'use strict';

	app
	.controller('TrendViewerController',TrendViewerController);

	TrendViewerController.$inject = ['$scope','$route','$location','trendViewer','ELEMENT'];

	function TrendViewerController($scope,$route,$location,trendViewer,ELEMENT) {
		var vm = this;

		vm.views = trendViewer.views;
		vm.viewNames = [];
		vm.changeView = changeView;
		vm.ELEMENT = ELEMENT;

		angular.forEach(vm.views,function(view) {
			vm.viewNames.push(view.name);
		});

		$scope.$watch(function() {
			if('current' in $route) {
				return $route.current.params.view;
			}
		}, function(r) {
			var view;

			if(vm.viewNames.indexOf(r) > -1) {
				view = r;
			} else {
				vm.changeView('type');
			}

			trendViewer.currentView.set(view);
			vm.currentView = view;
		});

		function changeView(name) {
			$location.path(name);
		}
	}

})(angular.module('periodicTable'));