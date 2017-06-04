function StepFinalController($scope, $state){

  console.log('StepFinalController está funcionando');

$scope.enviarPedido = enviarPedido;

$scope.irParaCobertura = irParaCobertura;

  // // Botão Enviar Pedido
function enviarPedido(){

console.log('Botão enviar pedido está funcionando');

console.log('contato inicial', $scope.pedido.contato);

  // Verificar se dados de email e entrega foram informados
      if ($scope.pedido.contato == null ||
          $scope.pedido.dataEntrega == null ) {
  // Se não informou algum, mensagem de erro...
        alert("Favor informar Email de contato e Data de Entrega.. =)");

  // Se informou tudo, continua...
      } else {

        var massa;
        var recheio;
        var cobertura;

  // Verifica qual massa foi selecionada...
        if ($scope.bolo.massa == "m01")
        { massa = "Massa Chocolate" }
        else if ($scope.bolo.massa == "m02")
        { massa = "Massa Baunilha"  }
        else if ($scope.bolo.massa == "m03")
        { massa = "Massa Morango"   };

  // Verifica qual recheio foi selecionado...
        if ($scope.bolo.recheio == "r01")
        { recheio = "Recheio Chocolate" }
        else if ($scope.bolo.recheio == "r02")
        { recheio = "Recheio Baunilha"  }
        else if ($scope.bolo.recheio == "r03")
        {recheio = "Recheio Frutas"   };

  // Verifica qual cobertura foi selecionada...
        if ($scope.bolo.cobertura == "c01")
        { cobertura = "Cobertura Caramelo" }
        else if ($scope.bolo.cobertura == "c02")
        { cobertura = "Cobertura Marshmallow"  }
        else if ($scope.bolo.cobertura == "c03")
        { cobertura = "Cobertura Chocolate"   };

  // Concatena Moeda e Valor total
        var valorTotalMoeda = "R$ " + $scope.bolo.valorTotal;

  // Traz da tela os dados do Cliente
        var dataEntrega = $scope.pedido.contato;
        var emailContato = $scope.pedido.dataEntrega;

  // Envia email com o Pedido do Cliente
  // parameters: service_id, template_id, template_parameters
        emailjs.send("default_service","monte_seu_bolo",{
          contato: emailContato,
          massa: massa,
          recheio: recheio,
          cobertura: cobertura,
          valorTotal: valorTotalMoeda,
          dataEntrega: dataEntrega})
          .then(function(response) {
  // Se o pedido foi enviado com sucesso, mensagem de sucesso...
            console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            alert("Pedido enviado com sucesso!! Aguarde nosso contato!! =) ");

            window.location.href = "index.html";

          }, function(err) {
  // Se pedido nao foi enviado, mensagem de erro...
            console.log("FAILED. error=", err);
            alert("Erro no pedido, favor tentar novamente! Desculpe-nos pelo transtorno.. =/ ")
          });

          // console.log(massa, recheio, cobertura, valorTotalMoeda, dataEntrega);


        };

      };

      function irParaCobertura(){
        console.log('função do botão anterior foi chamada');
        $state.go('step-cobertura');
      };



}
