'use strict';

/**
 * @ngdoc function
 * @name deemoBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the deemoBlogApp
 */
angular.module('deemoBlogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
