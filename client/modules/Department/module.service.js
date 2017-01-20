`use strict`;

(function() {
  // só precisa mudar o valor de MODULE_NAME
  const MODULE_NAME = `Department`

  const API = MODULE_NAME.toLowerCase() + 's/'
  const MODULE = { service }

  angular
    .module(`sisApp.${MODULE_NAME}.Service`, [`ngRoute`])
    .service(`${MODULE_NAME}Service`, MODULE.service);

  function service ($http) {

    const BASE_URL = `http://localhost:8000/api/${API}` ; // API

    this.list = () => 
      $http({
        url: BASE_URL,
        method: `GET`
      })

    this.get = (id) => 
      $http({
        url: BASE_URL + id,
        method: `GET`
      })

    this.getSchema = () => 
      $http({
        url: BASE_URL + 'schema',
        method: `GET`
      })

    this.create = (Form) => 
      $http({
        url: BASE_URL,
        method: `POST`,
        data: Form
      })


    this.update = (Form) => 
      $http({
        url: BASE_URL + Form._id,
        method: `PUT`,
        data: Form
      })

    this.remove = (user) => 
      $http({
        url: BASE_URL + user._id,
        method: `DELETE`
      })
  }
  
  service.$inject = [`$http`];
  
})()