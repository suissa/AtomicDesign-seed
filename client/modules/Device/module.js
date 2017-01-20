`use strict`;

(function() {
	const MODULE_NAME = `Device`
	const MODULE_PATH = `modules`
	const PATH = MODULE_NAME.toLowerCase()	
	const routes = {
		list: {
			templateUrl: `${MODULE_PATH}/${MODULE_NAME}/views/data.html`,
			controller: `${MODULE_NAME}ListController`
		},
		create: {
			templateUrl: `${MODULE_PATH}/${MODULE_NAME}/views/form.html`,
			controller: `${MODULE_NAME}CreateController`
		},
		get: {
			templateUrl: `${MODULE_PATH}/${MODULE_NAME}/views/data.html`,
			controller: `${MODULE_NAME}GetController`
		},
		edit: {
			templateUrl: `${MODULE_PATH}/${MODULE_NAME}/views/form.html`,
			controller: `${MODULE_NAME}EditController`
		}
	}

	const thisModule = angular.module(`sisApp.${MODULE_NAME}`, [
		`ngRoute`,
		`sisApp.${MODULE_NAME}.Controllers`
	])
	thisModule.config([ `$routeProvider`, Config ])

	function Config($routeProvider) {
		$routeProvider
			.when(`/${PATH}`, routes.list)
			.when(`/${PATH}/create`, routes.create)
			.when(`/${PATH}/:id`, routes.get)
			.when(`/${PATH}/:id/edit`, routes.edit);
	}

	Config.$inject = [`$routeProvider`];

})()