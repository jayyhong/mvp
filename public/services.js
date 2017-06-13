angular.module('app')

	.service('service', function() {
		const count = 0;

		return { 
			count: 0,
			addCount: function() {
				return this.count ++
			}
		}
	})