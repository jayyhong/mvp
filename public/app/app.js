
angular.module('app')
.controller('appCtrl', function($timeout, service) {

  this.count = 0;

  this.message = ""
  
  this.toggle = false;
  this.toggleFilter =()=> {
    this.toggle = true;
  }

  this.button = () =>{
    this.count++
  }

  this.spaceBar = ()=> {
    angular.element(document).bind('keyup', (e) => {
      if (e.keyCode === 32){
        service.addCount();
        this.count = service.count;
      }
    });
  }

})


// .run(function (service) {
//   angular.element(document).bind('keyup', function (e) {
//     if (e.keyCode === 32){
//     service.addCount++
//     this.count = service.count;
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