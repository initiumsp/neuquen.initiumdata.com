'use strict';

/**
 * @ngdoc function
 * @name neuqueninitiumdatacomApp.controller:TestctrlCtrl
 * @description
 * # TestctrlCtrl
 * Controller of the neuqueninitiumdatacomApp
 */
angular.module('neuqueninitiumdatacomApp')
  .controller('TestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.newStation = false;

    console.log('hello');


    //$scope.switchStation();
  });
