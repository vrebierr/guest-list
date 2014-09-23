'use strict';

angular.module('guestListApp')
	.controller('MainCtrl', function ($scope, socket, lists) {
		$scope.lists = lists;
		console.log(lists);
	});