angular.module('app')
.controller('startTimerCtrl', function(http, service, $timeout) {

  //hide start button
  this.toggle = false;

  this.toggleFilter =()=> {
    this.toggle = true;
  }

  //timer
    this.counter = 100;
		this.start = false;

		this.toggleStart =() => {
			this.start = true;
		}


    this.onTimeout =() => {
				if (this.start === true){
        this.counter--;
				} 
        mytimeout = $timeout(this.onTimeout,10);

        if (this.counter === 0) {
          this.stop()
        }

    }
    
    var mytimeout = $timeout(this.onTimeout,10);

    this.stop =() =>{
      $timeout.cancel(mytimeout);
      http.addPlayer({name: service.name.name, score: service.count})
        .then (() => {
          console.log('yayaya')
          http.getPlayers()
            .then ((results) => {
              this.players = results;
            })
        })
      console.log("service count", service.count)
      console.log("service name", service.name)

    }

})

.directive('startTimer', function() {
  return {
    scope: {
      players: '=',
      spaceBar: '='
    },
    controller: "startTimerCtrl",
    controllerAs: "ctrl",
    bindToController: true,
    templateUrl: "../app/startTimerTemplate.html"
  }
})