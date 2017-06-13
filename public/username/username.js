angular.module('app')
.controller('usernameCtrl', function(){

})

.directive('username', function() {
	return {
		scope: {},
		controller: 'usernameCtrl',
		controllerAs: 'ctrl',
		bindToController: true,
		templateUrl: 'username/usernameTemplate.html'
	}
})