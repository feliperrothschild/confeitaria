function StepRecheioController($scope, $state){

  console.log('StepRecheioController está funcionando');

  $scope.calcularRecheio = calcularRecheio;

  $scope.irParaCobertura = irParaCobertura;

  $scope.irParaMassa = irParaMassa;

  function calcularRecheio(){

    console.log('funcao calcular recheio foi chamada');

    console.log('radio escolhido: ', $scope.bolo.recheio);

    if ($scope.bolo.recheio != 'undefined') {

      if ($scope.bolo.recheio == 'r01') {
        $scope.bolo.recheioVal = 80;

      } else {
        if ($scope.bolo.recheio == 'r02') {
          $scope.bolo.recheioVal = 70;
        } else {

          if ($scope.bolo.recheio == 'r03') {
            $scope.bolo.recheioVal = 65;
          }

        }

      }

      console.log('valor do recheio: ', $scope.bolo.recheioVal);

      $scope.bolo.valorTotal = $scope.bolo.massaVal + $scope.bolo.recheioVal + $scope.bolo.coberturaVal ;


    }

  }

  function irParaCobertura(){

    console.log('função do botão próximo foi chamada');

    if ( $scope.bolo.recheio != null){

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
