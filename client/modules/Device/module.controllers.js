'use strict';

(function() {
	const MODULE_NAME = `Device`
	const error = (err) => console.log(`Erro: `, err);

	const thisModule = angular.module(
		`sisApp.${MODULE_NAME}.Controllers`, [
			`ngRoute`,
			`sisApp.${MODULE_NAME}.Service`
		])

	thisModule
		.controller(`${MODULE_NAME}ListController`, ListController)
		.controller(`${MODULE_NAME}GetController`, GetController)
		.controller(`${MODULE_NAME}CreateController`, CreateController)
		.controller(`${MODULE_NAME}EditController`, EditController);


	function ListController($scope, DeviceService) {
		$scope.MODULE_NAME = MODULE_NAME
		$scope.PATH = MODULE_NAME.toLowerCase()
		var vm = this;

		const error = (err) => console.log(`Erro: `, err);
		const success = (list) => {
			console.log(list)
			// $scope[`${MODULE_NAME}`.toLowerCase() + `s`] = list.data;
			$scope.list = list.data
		}

		const successSchema = (caught) => {
			console.log('SCHEMA', caught)
			$scope.SCHEMA = caught.data;
		}
		
		DeviceService
			.getSchema()
			.then(successSchema)
			.catch(error)

		$scope.list = true
		DeviceService
			.list()
			.then(success)
			.catch(error)
	}

	function GetController($scope, DeviceService, $routeParams) {
		$scope.MODULE_NAME = MODULE_NAME
		$scope.PATH = MODULE_NAME.toLowerCase()

		var vm = this;
		$scope.list = []

		const error = (err) => console.log(`Erro: `, err);
		const success = (caught) => {
			console.log(caught)
			// $scope[`${MODULE_NAME}`.toLowerCase()] = caught.data;
			$scope.caught = caught.data
		}

		DeviceService
			.get($routeParams.id)
			.then(success)
			.catch(error)
	}

	function CreateController($scope, DeviceService) {
		$scope.MODULE_NAME = MODULE_NAME
		$scope.PATH = MODULE_NAME.toLowerCase()
		$scope.SCHEMA = SCHEMA

		var vm = this;

		$scope.title = "Cadastrar"
		$scope.actionButton = "cadastrar" //pq o title sera diferente se nao soh usar lowerCase 

		const error = (err) => console.log(`Erro: `, err);
		const success = (created) => {
			console.log(`VOLTOU: `, created)
			$scope.message = created.data;
		}

		$scope.action = (Form) => 
			DeviceService
				.create(Form)
				.then(success)
				.catch(error)

		
	}

	function EditController($scope, DeviceService, $routeParams) {
		$scope.MODULE_NAME = MODULE_NAME
		$scope.PATH = MODULE_NAME.toLowerCase()
		// $scope.SCHEMA = SCHEMA

		var vm = this;

		$scope.title = "Editar"
		$scope.actionButton = "editar"

		const error = (err) => console.log(`Erro: `, err);
		const success = (caught) => {
			console.log(caught)
			$scope.Form = caught.data;
		}
		const logMessage = (updated) => {
			console.log(`VOLTOU: `, updated)
			$scope.message = updated.data;
		}
		const successSchema = (caught) => {
			console.log('SCHEMA', caught)
			$scope.SCHEMA = caught.data;
		}
		
		DeviceService
			.getSchema()
			.then(successSchema)
			.catch(error)

		DeviceService
			.get($routeParams.id)
			.then(success)
			.catch(error)

		$scope.action = (Form) => {
			console.log('Edit FORM', Form)
			// DeviceService
			// 	.update(Form)
			// 	.then(logMessage)
			// 	.catch(error)
		}
	}
	ListController.$inject = [`$scope`, `${MODULE_NAME}Service`];
	CreateController.$inject = [`$scope`, `${MODULE_NAME}Service`];
	GetController.$inject = [`$scope`, `${MODULE_NAME}Service`, `$routeParams`];
	EditController.$inject = [`$scope`, `${MODULE_NAME}Service`, `$routeParams`];
	
})()