'use strict';

const HOST = 'http://localhost:8000/'

const html5mode = false
const hash = !html5mode ? '#!' : ''

const menuList = [
  {
    label: 'Dashboard',
    link: hash + '/dashboard'
  },
  {
    label: 'User',
    link: hash + '/user'
  },
  {
    label: 'Device',
    link: hash + '/device'
  },
  {
    label: 'Department',
    link: hash + '/department'
  }
]

angular.module('sisApp.Dashboard', ['ngRoute'])

.config(['$routeProvider', DashboardConfig])
  .controller('DashboardCtrl', DashboardCtrl);

function DashboardConfig($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'modules/Dashboard/dashboard.html',
    controller: 'DashboardCtrl',
    controllerAs: 'vm'
  });
}

function DashboardCtrl($scope, $rootScope, $location) {

  $rootScope.menuList = menuList

  $scope.title = 'Module Dashboard'
}

DashboardConfig.$inject = ['$routeProvider'];
DashboardCtrl.$inject = ['$scope', '$rootScope', '$location'];

