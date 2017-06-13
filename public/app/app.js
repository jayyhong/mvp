
angular.module('app')
.controller('appCtrl', function($timeout) {

  this.count = 0;

  this.message = "Test"
  
  this.toggle = false;
  this.toggleFilter = function() {
    this.toggle = true;
  }

  this.button = function() {
    this.count++
  }

  this.spaceBar = function() {
    angular.element(document).bind('keyup', function (e) {
      if (e.keyCode === 32){
        service.addCount();
        console.log(service.count)
      }
    });
  }

//timer
  this.counter = 0;

  this.onTimeout = function() {
    this.counter ++
    mytimeout = $timeout(this.onTimeout, 1000);
  }
  var mytimeout = $timeout(this.onTimeout,1000);

  this.stop = function() {
    $timeout.cancel(mytimeout)
  }

})


// .config(function () {
//   angular.element(document).bind('keyup', function (e) {
//     if (e.keyCode === 32){
//     count++
//     console.log(count)
//     }
//   });
// })

.directive('app', function() {
  return {
    scope: {},
    controller: 'appCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '../app/appTemplate.html'
  }
})