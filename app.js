(function () {
  'use strict';

  angular.module('NameCalculator', [])
  .controller('NameCalculatorController', function ($scope){
    $scope.name="";
    $scope.totalValue=0;
    $scope.getNameCharCount= function () {
      var totalCharValue=getNamevaluest($scope.name);
      $scope.totalValue=totalCharValue;
    };
  });

  function getNamevaluest(star){
    var totalchar=0;
    for(int i=0; i<star.length; i++){
      totalchar+=totalchar+star.charCodeAt(i);
    }
    alert("totalchar value is "+totalchar);
    return totalchar;


  }

})();
