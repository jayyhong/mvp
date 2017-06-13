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
    this.getPlayers = function(callback){
    $http.get('/api/players')
    .then(function({data}) {
      callback(data);
    })
    .catch(function({data}){
      console.log('error')
    })
  },

  this.addPlayer = function(data) {
    $http.post('/api/players', data)
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  

  })