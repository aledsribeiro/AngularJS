app.controller("Aula09Ctrl1Controller", ['$scope', 'operacoes', 'Pessoa', function ($scope, operacoes, Pessoa) {
    $scope.pessoa = new Pessoa();
    console.log(operacoes.Somar(10, 10));
}]);

app.controller("Aula09Ctrl2Controller", ['$scope', 'operacoes', function ($scope, operacoes) {
    console.log(operacoes.Somar(10, 10));
}]);