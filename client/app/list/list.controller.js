'use strict';

angular.module('guestListApp')
	.controller('ListCtrl', function ($scope, list, Restangular) {
		$scope.list = list;
		list.all('entries').getList().then(function (entries) {
			$scope.entries = entries;
		});
		console.log($scope.list);
	});
