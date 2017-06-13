angular.module('app')
.controller('usernameCtrl', function(http, service){
  this.playerInput = {}

  this.submit = (data) => {
    http.addPlayer(data);
  }

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