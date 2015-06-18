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

    $scope.switchStation = function(){
      var station3 = document.querySelector('.station3');
      if ($scope.newStation) {
        station3.style.visibility = 'hidden';
        $scope.newStation = false;
      } else {
        station3.style.visibility = 'visible';
        $scope.newStation = true;
      }
    };

    //$scope.switchStation();
  });
