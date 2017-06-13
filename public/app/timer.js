angular.module('app')
.controller('timerCtrl', function($scope, $timeout) {
    $scope.counter = 1000;
		$scope.start = false;

		$scope.toggleStart = () => {
			$scope.start = true;
		}

    $scope.onTimeout = function(){
				if ($scope.start === true){
        $scope.counter--;
				} 
        mytimeout = $timeout($scope.onTimeout,10);

        if ($scope.counter === 0) {
          $scope.stop()
        }

    }
    
    var mytimeout = $timeout($scope.onTimeout,10);

    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }
})

// .directive('timer', function() {
//   return {
//     scope: {},
//     controller: 'timerCtrl',
//     controllerAs: 'timer',
//     bindToController: true,
//     templateUrl: "../app/timerTemplate.html"
//   }
// })
