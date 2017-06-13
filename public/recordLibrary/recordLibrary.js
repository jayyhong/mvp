angular.module('app')
.controller('recordLibraryCtrl', function() {

})

.directive('recordLibrary', function() {
  return {
    scope: {},
		controller: 'recordLibraryCtrl',
		controllerAs: 'ctrl',
		bindToController: true,
		templateUrl: '../recordLibrary/recordLibraryTemplate.html'
  }
})