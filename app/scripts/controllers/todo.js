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

        $scope.danger = true;

        todoService.getTodos()
            .success(function(data, status, headers, config){
                $scope.todos = data.todos;
            })
            .error(function(data, status, headers, config){

            });

        $scope.addTodo = function(){
            $scope.todos.push($scope.todo);
            $scope.todo='';
        };

        $scope.resetForm = function(){
            $scope.todo = {};
        };

        $scope.removeTask = function(id){
            todoService.removeTodo(id)
                .success(function(data, status, headers, config){
                    $scope.success = true;
                    $scope.message = "Todo deleted successfully";
                })
                .error(function(data, status, headers, config){

                })
        };

        $scope.updateTask = function(id){

        };

  });
