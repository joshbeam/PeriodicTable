;(function(app) {

	app.filter('camelToNormal',camelToNormal)

	function camelToNormal() {
		return function(input) {
			result = input.replace(/([A-Z])/g, ' $1');

			return result.charAt(0).toUpperCase() + result.slice(1);
		}
	}

})(angular.module('periodicTable'));