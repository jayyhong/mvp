angular.module('app')

	.service('service', function() {
		var count = 0;

		return {
			count: 0,
			addCount: function() {
				return count ++
			}
		}
	})