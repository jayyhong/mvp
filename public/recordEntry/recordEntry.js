angular.module('app')
.controller('recordEntryCtrl', function(){

})

.directive('recordEntry', function() {
  return {
    scope: {
      player: '<',
      players: '<'
    },
    controller: 'recordEntryCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '../recordEntry/recordEntryTemplate.html'
  }
})