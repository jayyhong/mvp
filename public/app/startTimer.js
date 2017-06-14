angular.module('app')
.controller('startTimerCtrl', function(http, service, $timeout) {

  //hide start button
  this.toggle = false;
  this.toggle2 = false;

  this.toggleFilter =()=> {
    if (this.toggle === false){
      this.toggleStart()
    this.toggle = true;
    } else {
      this.toggle = false;
    }
  }

  this.toggleFilter2 =() => {
    if (this.toggle2 === false) {
      this.toggle2 = true;
    } else {
      this.reset()
      this.toggle2 = false;
    }
  }

  //timer
    this.counter = 1000;
		this.start = false;
    this.init = false;
		this.toggleStart =() => {
			this.start = true;
		}

    //reset timer
    this.reset = () => {
      this.start = false;
      this.counter = 1000
      this.count = 0;
      if (this.end = false) {
      this.toggleStart()
      }
    }

    this.onTimeout =() => {
				if (this.start === true){
        this.counter--;
				} else {
          this.counter = 1000
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
      spaceBar: '=',
      count: '='
    },
    controller: "startTimerCtrl",
    controllerAs: "ctrl",
    bindToController: true,
    templateUrl: "../app/startTimerTemplate.html"
  }
})