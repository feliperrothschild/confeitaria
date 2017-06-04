// criar um módulo (1)
var app = angular.module('mastercake', ['ngAnimate','ui.router']);


//DECLARAÇÕES DE CONTROLLERS
app.controller('HeaderController', HeaderController);
app.controller('StepMassaController', StepMassaController);
app.controller('StepRecheioController', StepRecheioController);
app.controller('StepCoberturaController', StepCoberturaController);
app.controller('StepFinalController', StepFinalController);


//ROTAS
app.config(rotas);
