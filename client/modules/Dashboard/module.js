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
    link: hash + '/Device'
  },
  {
    label: 'Department',
    link: hash + '/department'
  }
]

angular.module('sisApp.dashboard', ['ngRoute'])

.config(['$routeProvider', DashboardConfig])
  .service('DashboardService', DashboardService)
  .controller('DashboardCtrl', DashboardCtrl);

function DashboardConfig($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'modules/Dashboard/dashboard.html',
    controller: 'DashboardCtrl',
    controllerAs: 'vm'
  });
}

function DashboardCtrl($scope, DashboardService, $rootScope, usSpinnerService, $location) {

  $rootScope.menuList = menuList

  console.log('menuList', menuList)

  var vm = this;
  var produtos = [];

  $scope.loading = true;
  $scope.title = 'Module Dashboard'
  // DashboardService.getCurrentUser()
  //   .then(res => {
  //     $rootScope.currentUser = res.data

  //     console.log('$rootScope.currentUser', $rootScope.currentUser)
  //   })
  //   .catch(err => {
  //     if ((err.status == 403) || (err.status == 401)) $location.path('/')
  //     console.log('error: ', err)
  //   })

  // DashboardService.list()
  //   .then(function (list) {
  //     console.log('Data: ', list.data);
  //     $scope.pendentes = (list.data) ? list.data : [];
  //   })
  //   .catch(function (err) {
  //     console.log('Erro: ', err);
  //   })

  // vm.listFilter = (filtros) => {
  //   filtros = Object.keys(filtros)
  //     .map(el => ({
  //       [el]: filtros[el].trim()
  //     }))
  //     .filter(el => Object.values(el)[0] !== "")
  //     .reduce((acc, cur) => Object.assign(acc, cur), {})

  //   console.log('filtros: ', filtros);
  //   DashboardService.listFilter(filtros)
  //     .then(function (r) {
  //       // paginador(r.data[r.data.length - 1].pages);
  //       // vm.activePage = r.data[r.data.length - 1].page;
  //       // $scope.pendentes = []
  //       $scope.filtrados = r.data;
  //       console.log('filtrado: ', r);

  //     })
  //     .catch(function (err) {
  //       console.log('Erro: ', err);
  //     })
  //     .finally(function () {
  //       // $scope.stopSpin = function () {
  //       usSpinnerService.stop('spinner');
  //       // }
  //     });
  //   vm.searched = true
  // }

}

function DashboardService($http, usSpinnerService) {
  // const BASE_URL = 'http://localhost:3000/api/instrumentos/'; // API
  const BASE_URL = HOST + 'api/validacoes/pendentes/populate/all';
  // const BASE_URL_MOCK = '../dashboardDadoMock.json'
  this.list = function () {
    usSpinnerService.spin('spinner')
    const request = {
      url: BASE_URL,
      method: 'GET'
    }
    return $http(request);
  }

  this.listFilter = function (filtros) {
    const BASE_URL = HOST + 'api/relatorios/'
    usSpinnerService.spin('spinner')
    const request = {
      url: BASE_URL + 'filter/dashboard',
      params: filtros,
      method: 'GET'
    }
    return $http(request);
  }

  this.getCurrentUser = function () {

    usSpinnerService.spin('spinner')
    const _BASE_URL = HOST + 'api/users/currentuser'
    const request = {
      url: _BASE_URL,
      method: 'GET'
    }
    console.log('getCurrentUser', request)
    return $http(request);
  }

  this.create = function (user) {
    usSpinnerService.spin('spinner')
    const request = {
      url: BASE_URL,
      method: 'POST',
      data: user
    }
    return $http(request);
  }

  this.remove = function (user) {
    const request = {
      url: BASE_URL + user._id,
      method: 'DELETE'
    }
    return $http(request);
  }
}

DashboardConfig.$inject = ['$routeProvider'];
DashboardCtrl.$inject = ['$scope', 'DashboardService', '$rootScope', 'usSpinnerService', '$location'];
DashboardService.$inject = ['$http', 'usSpinnerService'];
