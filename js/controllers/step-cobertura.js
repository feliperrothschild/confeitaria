function StepCoberturaController($scope, $state){

  console.log('StepCoberturaController está funcionando');

  $scope.calcularCobertura = calcularCobertura;
  $scope.irParaRecheio = irParaRecheio;
  $scope.irParaFinal =  irParaFinal;

  function calcularCobertura(){

    console.log('funcao calcular Cobertura foi chamada');

    console.log('radio escolhido: ', $scope.bolo.cobertura);

    switch ($scope.bolo.cobertura) {
      case 'c01':
      $scope.bolo.coberturaVal = 80;
      $scope.bolo.coberturaDes = "Caramelo";
      break;

      case 'c02':
      $scope.bolo.coberturaVal = 70;
      $scope.bolo.coberturaDes = "Marshmallow";
      break;

      case 'c03':
      $scope.bolo.coberturaVal = 65;
      $scope.bolo.coberturaDes = "Chocolate";
      break;
      default:
    }

    $scope.bolo.valorTotal = $scope.bolo.massaVal + $scope.bolo.recheioVal + $scope.bolo.coberturaVal ;
    console.log('valor da cobertura: ', $scope.bolo.coberturaVal);
    console.log('Valor total: ', $scope.bolo.valorTotal );

  }


function irParaFinal(){

  console.log('função do botão próximo foi chamada');

  if ($scope.bolo.cobertura){

    $state.go('step-final');

  } else {
    alert('Selecionar a cobertura antes de prosseguir!');
  }
}

function irParaRecheio(){
  console.log('função do botão anterior foi chamada');
  $state.go('step-recheio');
}

}
