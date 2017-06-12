angular.module('app')

.controller('appCtrl', function() {
  var count = 0;
  this.message = "Flexing on that finger"

  this.spaceBar = function() {
    count++
    console.log(count)
  }
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