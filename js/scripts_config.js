// Transfere dados de tela para variáveis internas
var inputMassa1 = document.querySelector('#massa01');
var inputMassa2 = document.querySelector('#massa02');
var inputMassa3 = document.querySelector('#massa03');

var inputRecheio1 = document.querySelector('#recheio01');
var inputRecheio2 = document.querySelector('#recheio02');
var inputRecheio3 = document.querySelector('#recheio03');

var inputCobertura1 = document.querySelector('#cobertura01');
var inputCobertura2 = document.querySelector('#cobertura02');
var inputCobertura3 = document.querySelector('#cobertura03');

var inputData = document.querySelector('#dataEntrega');
var inputEmail = document.querySelector('#email');

var massas    = document.getElementsByName('massa');
var recheio   = document.getElementsByName('recheio');
var cobertura = document.getElementsByName('cobertura');

var paragrafoValorTotal = document.querySelector('span.valor-total');
var massaValorTotal = document.querySelector('span.massa_select');
var recheioValorTotal = document.querySelector('span.recheio_select');
var coberturaValorTotal = document.querySelector('span.cobertura_select');

// Cria variáveis globais
var valorTotal = 0;
var valorMassa = 0;
var valorRecheio = 0;
var valorCobertura = 0;
var massaSelecionada;
var recheioSelecionado;
var coberturaSelecionada;

// Eventos de tela
inputMassa1.addEventListener('click', descobrirMassaSelecionada );
inputMassa2.addEventListener('click', descobrirMassaSelecionada );
inputMassa3.addEventListener('click', descobrirMassaSelecionada );

inputRecheio1.addEventListener('click', descobrirRecheioSelecionado );
inputRecheio2.addEventListener('click', descobrirRecheioSelecionado );
inputRecheio3.addEventListener('click', descobrirRecheioSelecionado );

inputCobertura1.addEventListener('click', descobrirCoberturaSelecionada );
inputCobertura2.addEventListener('click', descobrirCoberturaSelecionada );
inputCobertura3.addEventListener('click', descobrirCoberturaSelecionada );


//Para cada item selecionado, atualiza Valor Total do Bolo

function descobrirMassaSelecionada(){
  massaSelecionada = this.id;
  // console.log(massaSelecionada);
  calcularValorBolo();
};

function descobrirRecheioSelecionado(){
  recheioSelecionado = this.id;
  // console.log(recheioSelecionado);
  calcularValorBolo();
};

function descobrirCoberturaSelecionada() {
  coberturaSelecionada = this.id;
  // console.log(coberturaSelecionada);
  calcularValorBolo();
};

// Calcula Valor do Bolo
function calcularValorBolo(){
  var stringValor = 'R$ ';
  // Valor Massa Selecionada
  if (massaSelecionada == 'massa01') {
    valorMassa = 80;
    massaValorTotal.innerHTML = 80;
    massaValorTotal.innerHTML = stringValor + massaValorTotal.innerHTML;

  } else if (massaSelecionada == 'massa02') {
    valorMassa = 70;
    massaValorTotal.innerHTML = valorMassa;
    massaValorTotal.innerHTML = stringValor + massaValorTotal.innerHTML;

  } else if (massaSelecionada == 'massa03') {
    valorMassa = 65;
    massaValorTotal.innerHTML = valorMassa;
    massaValorTotal.innerHTML = stringValor + massaValorTotal.innerHTML;
  };

  // Valor Recheio Selecionado
  if (recheioSelecionado == 'recheio01') {
    valorRecheio = 80;
    recheioValorTotal.innerHTML = valorRecheio;
    recheioValorTotal.innerHTML = stringValor + recheioValorTotal.innerHTML;

  } else if (recheioSelecionado == 'recheio02') {
    valorRecheio = 70;
    recheioValorTotal.innerHTML = valorRecheio;
    recheioValorTotal.innerHTML = stringValor + recheioValorTotal.innerHTML;

  } else if (recheioSelecionado == 'recheio03') {
    valorRecheio = 65;
    recheioValorTotal.innerHTML = valorRecheio;
    recheioValorTotal.innerHTML = stringValor + recheioValorTotal.innerHTML;
  };

  // Valor Cobertura Selecionada
  if (coberturaSelecionada == 'cobertura01') {
    valorCobertura = 80;
    coberturaValorTotal.innerHTML = valorCobertura;
    coberturaValorTotal.innerHTML = stringValor + coberturaValorTotal.innerHTML;

  } else if (coberturaSelecionada == 'cobertura02') {
    valorCobertura = 70;
    coberturaValorTotal.innerHTML = valorCobertura;
      coberturaValorTotal.innerHTML = stringValor + coberturaValorTotal.innerHTML;

  } else if (coberturaSelecionada == 'cobertura03') {
    valorCobertura = 65;
    coberturaValorTotal.innerHTML = valorCobertura;
    coberturaValorTotal.innerHTML = stringValor + coberturaValorTotal.innerHTML;
  };

// Soma os valores dos itens selecionados
  valorTotal = valorMassa + valorRecheio + valorCobertura ;
  paragrafoValorTotal.innerHTML = valorTotal;

// Concatena Moeda e Valor para exibir na tela
  // var stringValor = 'R$ ';
  paragrafoValorTotal.innerHTML = stringValor + paragrafoValorTotal.innerHTML;


  // console.log(valorTotal);

};

// Botão Enviar Pedido
function enviarPedido() {

// Verificar se o cliente escolheu todos os ingredientes
  if (massaSelecionada === undefined ||
      recheioSelecionado === undefined ||
      coberturaSelecionada === undefined) {
// Se algum item ficou em branco, mensagem de erro..
    alert("Favor selecionar todos os itens do bolo.. =)");

// Se escolheu todos, continua...
  } else {

// console.log(massaSelecionada, recheioSelecionado, coberturaSelecionada );

// Verificar se dados de email e entrega foram informados
    if (inputEmail.value == "" ||
        inputData.value == "") {
// Se não informou algum, mensagem de erro...
      alert("Favor informar Email de contato e Data de Entrega.. =)");

// Se informou tudo, continua...
    } else {

      var massa;
      var recheio;
      var cobertura;

// Verifica qual massa foi selecionada...
      if (massaSelecionada == "massa01")
      { massa = "Massa Chocolate" }
      else if (massaSelecionada == "massa02")
      { massa = "Massa Baunilha"  }
      else if (massaSelecionada == "massa03")
      { massa = "Massa Morango"   };

// Verifica qual recheio foi selecionado...
      if (recheioSelecionado == "recheio01")
      { recheio = "Recheio Chocolate" }
      else if (recheioSelecionado == "recheio02")
      { recheio = "Recheio Baunilha"  }
      else if (recheioSelecionado == "recheio03")
      {recheio = "Recheio Frutas"   };

// Verifica qual cobertura foi selecionada...
      if (coberturaSelecionada == "cobertura01")
      { cobertura = "Cobertura Caramelo" }
      else if (coberturaSelecionada == "cobertura02")
      { cobertura = "Cobertura Marshmallow"  }
      else if (coberturaSelecionada == "cobertura03")
      { cobertura = "Cobertura Chocolate"   };

// Concatena Moeda e Valor total
      var valorTotalMoeda = "R$ " + valorTotal;

// Traz da tela os dados do Cliente
      var dataEntrega = inputData.value;
      var emailContato = inputEmail.value;

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
          alert("Pedido enviado com sucesso!! Aguarde nosso contato!! =) ")
        }, function(err) {
// Se pedido nao foi enviado, mensagem de erro...
          console.log("FAILED. error=", err);
          alert("Erro no pedido, favor tentar novamente! Desculpe-nos pelo transtorno.. =/ ")
        });

        // console.log(massa, recheio, cobertura, valorTotalMoeda, dataEntrega);


      };

    };

  };
