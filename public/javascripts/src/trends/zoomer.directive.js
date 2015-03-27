;(function(app) {
	'use strict';

	app
	.directive('zoomer',zoomer);

	zoomer.$inject = ['$rootScope','trendViewer'];

	function zoomer($rootScope,trendViewer) {
		var d = {
			restrict: 'A',
			link: link
		};

		return d;

		function link(scope, element, attrs) {
			var $el = $(element[0]),
				$li = $el.children('li');

			$li.children('button[in]').on('click',function() {
				trendViewer.factor.up();
				$rootScope.$broadcast('factor.up',trendViewer.factor.get());
			});

			$li.children('button[out]').on('click',function() {
				trendViewer.factor.down();
				$rootScope.$broadcast('factor.down',trendViewer.factor.get());
			});
		}
	}

})(angular.module('periodicTable'));