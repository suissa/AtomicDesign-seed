'use strict';

angular.module('sisApp.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/logout', {
    controller: 'MenuCtrl',
    resolve: {
      logout: function (MenuService) {

      }
    }
  });
}])

.service('MenuService', MenuService)
.controller('MenuCtrl', MenuCtrl)

function MenuCtrl ($scope, $location, MenuService, $rootScope) {
  $scope.form = {};


  $scope.$watch('currentUser.selectedCompany.label', (newval, oldval)=> { 
    if ((newval) && (newval != $rootScope.currentUser.selectedCompany.label)) 
      $scope.chageCompany(newval) 
  });


  $scope.chageCompany = function( idCompany ) {
    const codinterno = idCompany

    function success (res) {
        if (( res.status === 200 ) && ( $rootScope.currentUser )){
          $rootScope.currentUser.selectedCompany = res.data;
          $rootScope.currentUser.selectedCompany.label = res.data.emp_codinterno + ' - ' + res.data.emp_razao
      // if (res.data.status === 200) {
          $location.path('/dashboard')
        } else $location.path('/') 
        // $window.location.href = '/dashboard'
      // }
    }
    function error (error) {
      console.log('LOGIN error', error)
    }
    MenuService
      .setCompany( codinterno )
      .then(success)
      .catch(error)
  }
}
MenuCtrl.$inject = ['$scope', '$location','MenuService', '$rootScope']

function MenuService ($http) {
  const BASE_URL = 'http://localhost:3000/api/users/';

  this.currentUser = function() {
    const request = {
      url: BASE_URL+'currentuser',
      method: 'GET'
    }
    return $http(request);
  }

  this.setCompany = function( codinterno ) {
    const request = {
      url: BASE_URL + 'setCompany',
      method: 'POST', 
      data: {emp_codinterno: codinterno}
    }
    return $http(request);
  }

  this.logout = function(user) {
    console.log('user', user)

    let _u = {
        email: user.email,
        password: user.password,
    //   cl_codinterno: user.cl_codinterno
    }
    console.log('_u', _u)
    const request = {
      url: BASE_URL + 'login',
      method: 'POST',
      data: _u
    }
    return $http(request);
  }
}
MenuService.$inject = ['$http']
