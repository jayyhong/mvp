angular.module('app')

	.service('service', function($http) {
		const count = 0;

		return { 
			count: 0,
			addCount: function() {
				return this.count ++
			}
		}

	})

  .service('http', function($http){
    this.getPlayers = function(){
    return $http.get('/api/players')
    .then(function(results) {
      return results.data;
    })
    .catch(function({data}){
      console.log('error')
    })
  },

  this.addPlayer = function(data) {
    return $http.post('/api/players', data)
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  this.name = {}
  

  })