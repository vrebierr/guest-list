'use strict';

angular.module('guestListApp')
	.config(function ($stateProvider) {
		$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainCtrl',
			resolve: {
				lists: function (Restangular) {
					return Restangular.all('lists').getList();
				}
			}
		});
	});
