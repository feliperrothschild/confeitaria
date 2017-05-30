// criar um módulo (1)
var app = angular.module('mastercake', []);

// criar função do controller
function CakeController($scope){
  $scope.pagina = 'pag_massa';

}
//registrar a função como controller no angular (1)
app.controller('CakeController', CakeController);
