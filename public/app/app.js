angular.module('app')

.controller('appCtrl', function() {
  this.message = "Flexing on that finger"

})

.directive('app', function() {
  return {
    scope: {},
    controller: 'appCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '../app/appTemplate.html'
  }
})