'use strict';


angular.module('sisApp.menu', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MenuCtrl'
  });
}])
.controller('MenuCtrl', MenuCtrl)

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
  }
]

function MenuCtrl ($scope, $location, $rootScope) {
  $rootScope.menuList = menuList

  console.log('menuList', menuList)
}
MenuCtrl.$inject = ['$scope', '$location', '$rootScope']

// function MenuService ($http) {
//   const BASE_URL = 'http://localhost:3000/api/users/';

// }
// MenuService.$inject = ['$http']
