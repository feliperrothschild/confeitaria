function rotas($stateProvider, $urlRouterProvider){

    $stateProvider.state('step-massa', {
        templateUrl: 'templates/step-massa.html',
        controller: 'StepMassaController',
        url: '/step-massa'
    });

    $stateProvider.state('step-recheio', {
        templateUrl: 'templates/step-recheio.html',
        controller: 'StepRecheioController',
        url: '/step-recheio'
    });

    $stateProvider.state('step-cobertura', {
        templateUrl: 'templates/step-cobertura.html',
        controller: 'StepCoberturaController',
        url: '/step-cobertura'
    });

    $stateProvider.state('step-final', {
        templateUrl: 'templates/step-final.html',
        controller: 'StepFinalController',
        url: '/step-final'
    });

    $urlRouterProvider.otherwise('/step-massa');
}
