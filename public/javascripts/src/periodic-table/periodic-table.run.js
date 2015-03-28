(function(app) {
	
	app.run(run);
	
	run.$inject = ['$rootScope','$timeout'];
	
	function run($rootScope,$timeout) {
		$rootScope.layout = {
			loading: false	
		};
		
		$rootScope.$on('$routeChangeStart', function() {
			$rootScope.layout.loading = true;
		});

		$rootScope.$on('$routeChangeSuccess', function() {
			$timeout(function() {
				$rootScope.layout.loading = false;
			},250);	
		});

		$rootScope.$on('$routeChangeError', function() {
			$rootScope.layout.loading = false;
		});
	}
	
})(angular.module('periodicTable'));