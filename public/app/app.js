
angular.module('app')
.controller('appCtrl', function($timeout, service, http) {

//count everytime spacebar is pressed
  this.count = 0;
//array of player names and score
  this.players = [];
  
//will hide the start button
  this.toggle = false;
  this.toggleFilter =()=> {
    this.toggle = true;
  }
//will send an http request to get data from database
  this.callPlayers = (data) => {
    this.players = data;
    console.log(this.players)
  }
  http.getPlayers(this.callPlayers);

//binds keyup spacebar onto the document through a service function
  this.spaceBar = ()=> {
    angular.element(document).bind('keydown', (e) => {
      if (e.keyCode === 32){
        e.preventDefault();
      }
    })

    angular.element(document).bind('keyup', (e) => {
      if (e.keyCode === 32){
        service.addCount();
        this.count = service.count;
        console.log(service.count)
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