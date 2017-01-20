<<<<<<< HEAD
'use strict';

(function () {
	// const HASH = location.hash.replace('#!/', '')
	// const MODULE_NAME = HASH[0].toUpperCase() + HASH.slice(1) 
	const MODULE_NAME = 'Device'
	const MODULES_PATH = 'modules'
	const PATH = `/` + MODULE_NAME.toLowerCase()
	const actions = [
		`ModuleList`,
		`ModuleGetCtrl`,
		`ModuleEditCtrl`,
		`ModuleCreateCtrl`,
	]

	console.log('MODULE_NAME', MODULE_NAME)
	const routes = [
		{	
			path: PATH,
			templateUrl: `${MODULES_PATH}/${MODULE_NAME}/data.html`,
			action: `ModuleList`,
		},
		{	
			path: PATH + `/create`,
			templateUrl: `${MODULES_PATH}/${MODULE_NAME}/form.html`,
			action: `ModuleCreateCtrl`,
		},
		{	
			path: PATH + `/:id`,
			templateUrl: `${MODULES_PATH}/${MODULE_NAME}/data.html`,
			action: `ModuleGetCtrl`,
		},
		{	
			path: PATH + `/:id/edit`,
			templateUrl: `${MODULES_PATH}/${MODULE_NAME}/form.html`,
			action: `ModuleEditCtrl`,
		}
	]

	const MODULE = {
		name: MODULE_NAME,
		config: ModuleConfig,
		service: ModuleService,
		ModuleList,
		ModuleGetCtrl,
		ModuleEditCtrl,
		ModuleCreateCtrl,
	}

	const thisModule = angular.module(`sisApp.${MODULE_NAME}`, ['ngRoute'])

	thisModule
		.config(['$routeProvider', MODULE.config])
		.service(`ModuleService`, MODULE.service)

	for (const action in actions) {
		if (actions[action]) 
			thisModule.controller(`${actions[action]}`, MODULE[`${actions[action]}`])
	}

	function ModuleConfig($routeProvider) {
		for (const route of routes) {
			$routeProvider
				.when(route.path, {
					templateUrl: route.templateUrl,
					controller: route.action
				})
		}
	}

	function ModuleList($scope, ModuleService) {

		var vm = this;

		$scope.list = true

		function success (list) {
			console.log(list)
			$scope.users = list.data;
		}
		function error (err) {
			console.log('Erro: ', err);
		}

		ModuleService
			.list()
			.then(success)
			.catch(error)
	}


	function ModuleCreateCtrl($scope, ModuleService, $routeParams) {

		var vm = this;

		$scope.title = "Cadastrar"
		$scope.actionButton = "cadastrar" //pq o title sera diferente se nao soh usar lowerCase 

		function success (user) {
			console.log('VOLTOU: ', user)
			$scope.message = user.data;
		}

		function error (err) {
			console.log('Erro: ', err);
		}

		$scope.action = (Form) => 
			ModuleService
				.create(Form)
				.then(success)
				.catch(error)
	}

	function ModuleEditCtrl($scope, ModuleService, $routeParams) {

		var vm = this;
		const edit = !!($routeParams.id)

		$scope.title = "Editar"
		$scope.actionButton = "editar"

		function success (list) {
			console.log(list)
			$scope.Form = list.data;
		}

		function error (err) {
			console.log('Erro: ', err);
		}

		ModuleService
			.get($routeParams.id)
			.then(success)
			.catch(error)

		$scope.action = function (Form) {
			function success (user) {
				console.log('VOLTOU: ', user)
				$scope.message = user.data;
			}
			ModuleService
				.update(Form)
				.then(success)
				.catch(error)
		}
	}

	function ModuleGetCtrl($scope, ModuleService, $routeParams) {

		var vm = this;
		var produtos = [];

		$scope.list = false

		function success (list) {
			console.log(list)
			$scope.users = list.data;
		}
		function error (err) {
			console.log('Erro: ', err);
		}

		ModuleService
			.get($routeParams.id)
			.then(success)
			.catch(error)
	}

	function ModuleService($http) {
		const API = 'api/' + MODULE_NAME.toLowerCase() + 's'
		const BASE_URL = `http://localhost:8000/${API}/`; // API
		
		this.list = function () {
			const request = {
				url: BASE_URL,
				method: 'GET'
			}
			return $http(request);
		}

		this.get = function (id) {
			const request = {
				url: BASE_URL + id,
				method: 'GET'
			}
			return $http(request);
		}

		this.create = function (Form) {
			const request = {
				url: BASE_URL,
				method: 'POST',
				data: Form
			}
			return $http(request);
		}

		this.update = function (Form) {
			const request = {
				url: BASE_URL + Form._id,
				method: 'PUT',
				data: Form
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

	ModuleConfig.$inject = ['$routeProvider'];
	ModuleList.$inject = ['$scope', 'ModuleService'];
	ModuleGetCtrl.$inject = ['$scope', 'ModuleService', '$routeParams'];
	ModuleCreateCtrl.$inject = ['$scope', 'ModuleService', '$routeParams'];
	ModuleEditCtrl.$inject = ['$scope', 'ModuleService', '$routeParams'];
	ModuleService.$inject = ['$http'];
})()

'use strict';

=======
`use strict`;

(function() {
	const MODULE_NAME = `Device`
	const MODULE_PATH = `modules`

	console.log(`MODULE_NAME`, MODULE_NAME)


	angular.module(`sisApp.${MODULE_NAME}`, [
		`ngRoute`,
		`sisApp.${MODULE_NAME}.Controllers`
	])
	.config([ `$routeProvider`, Config ])



	function Config($routeProvider) {
		$routeProvider
			.when(`/user`, {
				templateUrl: `${MODULE_PATH}/${MODULE_NAME}/data.html`,
				controller: `${MODULE_NAME}ListController`
			})
			.when(`/user/create`, {
				templateUrl: `${MODULE_PATH}/${MODULE_NAME}/form.html`,
				controller: `${MODULE_NAME}FormController`
			})
			.when(`/user/:id`, {
				templateUrl: `${MODULE_PATH}/${MODULE_NAME}/data.html`,
				controller: `${MODULE_NAME}GetController`
			})
			.when(`/user/:id/edit`, {
				templateUrl: `${MODULE_PATH}/${MODULE_NAME}/form.html`,
				controller: `${MODULE_NAME}FormController`
			});
	}

	Config.$inject = [`$routeProvider`];

})()
>>>>>>> feature-modularizacao-inicio
