'use strict';

/**
 * @ngdoc function
 * @name yoAppApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the yoAppApp
 */
angular.module('yoAppApp')
  .controller('TodoCtrl', function ($scope,todoService) {

        todoService.getTodos()
            .success(function(data){
                $scope.todos = data.todos;
            })
            .error(function(){

            });

        $scope.addTodo = function(){
            $scope.todos.push($scope.todo);
            $scope.todo='';
        };


  });
