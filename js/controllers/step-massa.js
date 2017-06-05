function StepMassaController($scope, $state){

  console.log('StepMassaController está funcionando');

  $scope.calcularMassa = calcularMassa;
  $scope.irParaRecheio = irParaRecheio;

  function calcularMassa(){

    console.log('funcao calcular massa foi chamada');

    console.log('radio escolhido: ', $scope.bolo.massa);


    switch ($scope.bolo.massa) {
      case 'm01':
      $scope.bolo.massaVal = 80;
      break;

      case 'm02':
      $scope.bolo.massaVal = 70;
      break

      case 'm03':
      $scope.bolo.massaVal = 65;
      break;
      default:
    }

    $scope.bolo.valorTotal = $scope.bolo.massaVal + $scope.bolo.recheioVal + $scope.bolo.coberturaVal ;
    console.log('valor da massa: ', $scope.bolo.massaVal);
    console.log('Valor Total: ',$scope.bolo.valorTotal );

  }

  function irParaRecheio(){

    console.log('função do botão próximo foi chamada');

    if ($scope.bolo.massa) {

      $state.go('step-recheio');

    } else {
      alert('Selecionar a massa antes de prosseguir!')
    }
  }



}
