function HeaderController($scope){

$scope.bolo = {
  massa: null,
  massaVal: null,
  massaDes: null,
  recheio: null,
  recheioVal: null,
  recheioDes: null,
  cobertura: null,
  coberturaVal: null,
  coberturaDes: null,
  valorTotal: null,
  };

$scope.pedido = {
  contato: null,
  dataEntrega: null,
}



console.log('HeaderController foi chamado');

console.log('Massa escolhida: ', $scope.bolo.massaVal);
console.log('Recheio escolhido: ', $scope.bolo.recheioVal);
console.log('Cobertura escolhida: ', $scope.bolo.coberturaVal);

}
