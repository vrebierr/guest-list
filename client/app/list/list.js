'use strict';

angular.module('guestListApp')
	.config(function ($stateProvider) {
		$stateProvider
			.state('list', {
				url: '/list/:id',
				templateUrl: 'app/list/list.html',
				controller: 'ListCtrl',
				//authenticate: true
				resolve: {
					list: function (Restangular, $stateParams) {
						return Restangular.one('lists', $stateParams.id).get();
					}
				}
			});
	});