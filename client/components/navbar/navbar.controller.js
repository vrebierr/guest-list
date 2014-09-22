'use strict';

angular.module('guestListApp')
<<<<<<< HEAD
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
=======
  .controller('NavbarCtrl', function ($scope, $location) {
>>>>>>> origin/master
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
<<<<<<< HEAD
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };
=======
>>>>>>> origin/master

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });