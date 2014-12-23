'use strict';

/**
 * @ngdoc service
 * @name yoAppApp.todoService
 * @description
 * # todoService
 * Service in the yoAppApp.
 */
angular.module('yoAppApp')
  .service('todoService', function todoService($http, apibaseurl) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getTodos = function(){
        return $http.get(apibaseurl+'getTodos/1');
    };

    this.addNewTodo = function(){
        return $http.post(apibaseurl+'saveTodo');
    };
  });
