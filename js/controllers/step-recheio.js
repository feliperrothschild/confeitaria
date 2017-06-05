function StepRecheioController($scope, $state){

  console.log('StepRecheioController está funcionando');

  $scope.calcularRecheio = calcularRecheio;

  $scope.irParaCobertura = irParaCobertura;

  $scope.irParaMassa = irParaMassa;

  function calcularRecheio(){

    console.log('funcao calcular recheio foi chamada');

    console.log('radio escolhido: ', $scope.bolo.recheio);

    switch ($scope.bolo.recheio) {
      case 'r01':
      $scope.bolo.recheioVal = 80;
      $scope.bolo.recheioDes = "Chocolate";
      break;

      case 'r02':
      $scope.bolo.recheioVal = 70;
      $scope.bolo.recheioDes = "Baunilha";
      break;

      case 'r03':
      $scope.bolo.recheioVal = 65;
      $scope.bolo.recheioDes = "Frutas";
      break;
      default:
    }

    $scope.bolo.valorTotal = $scope.bolo.massaVal + $scope.bolo.recheioVal + $scope.bolo.coberturaVal ;
    console.log('valor do recheio: ', $scope.bolo.recheioVal);
    console.log('Valor Total: ',$scope.bolo.valorTotal );

  }

  function irParaCobertura(){

    console.log('Função do botão próximo foi chamada');

    if ($scope.bolo.recheio){

      $state.go('step-cobertura');

    } else {
      alert('Selecionar o recheio antes de prosseguir!');
    }
  }

  function irParaMassa(){
    console.log('função do botão anterior foi chamada');
    $state.go('step-massa');
  };

}
