function StepMassaController($scope, $state){

  console.log('StepMassaController está funcionando');

  $scope.calcularMassa = calcularMassa;

  $scope.irParaRecheio = irParaRecheio;

  function calcularMassa(){

    console.log('funcao calcular massa foi chamada');

    console.log('radio escolhido: ', $scope.bolo.massa);

    if ($scope.bolo.massa != 'undefined') {

      if ($scope.bolo.massa == 'm01') {
        $scope.bolo.massaVal = 80;

      } else {
        if ($scope.bolo.massa == 'm02') {
          $scope.bolo.massaVal = 70;
        } else {

          if ($scope.bolo.massa == 'm03') {
            $scope.bolo.massaVal = 65;
          }

        }

      }

      console.log('valor da massa: ', $scope.bolo.massaVal);

      $scope.bolo.valorTotal = $scope.bolo.massaVal + $scope.bolo.recheioVal + $scope.bolo.coberturaVal ;
      // return  $scope.bolo.massaVal;

      console.log('Valor Total: ',$scope.bolo.valorTotal );

    }

  }

  function irParaRecheio(){

    console.log('função do botão próximo foi chamada');

    if ( $scope.bolo.massa != null) {

      $state.go('step-recheio');

    } else {
      alert('Selecionar a massa antes de prosseguir!')
    }
  }



}
