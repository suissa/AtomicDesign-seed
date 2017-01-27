'use strict';

// Declare app level module which depends on views, and components
angular.module('sisApp', [
  'ngRoute',
  'sisApp.Dashboard',
  'sisApp.menu',
  'sisApp.User',
  'sisApp.Department',
  'sisApp.Device',
  'sisApp.Gate',
  'ui.materialize',
  'angularSpinner'
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({
    redirectTo: '/dashboard'
  });
}]);
