angular.module('app')
.controller('timerCtrl', function($scope, $timeout) {
    $scope.counter = 0;
		$scope.start = false;

		$scope.toggleStart = () => {
			$scope.start = true;
		}

    $scope.onTimeout = function(){
				if ($scope.start === true){
        $scope.counter++;
				}
        mytimeout = $timeout($scope.onTimeout,10);
    }
    
    var mytimeout = $timeout($scope.onTimeout,10);

    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }
})