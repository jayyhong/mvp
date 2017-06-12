var count = 0

angular.module('app')
.controller('appCtrl', function() {
  this.message = "Flexing on that finger"

})

.config(function () {
  angular.element(document).bind('keyup', function (e) {
    if (e.keyCode === 32){
    count++
    console.log(count)
    }
  });
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