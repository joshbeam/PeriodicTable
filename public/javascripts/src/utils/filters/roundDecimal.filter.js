;(function(app) {

	app.filter('roundDecimal',roundDecimal)

	function roundDecimal() {
		return function(input,places) {
			return input.toFixed(+places);
		}
	}

})(angular.module('periodicTable'));