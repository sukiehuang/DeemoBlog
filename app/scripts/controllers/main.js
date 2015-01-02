'use strict';

/**
 * @ngdoc function
 * @name deemoBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deemoBlogApp
 */

deemoApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
deemoApp.controller('RouteListCtrl',function($scope){

});
deemoApp.controller('RouteDetailCtrl',function($scope,$routeParams){
  $scope.id = $routeParams.id;
});
