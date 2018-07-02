function Aula10Controller($scope, $filter) {
    console.log("control");
    console.log($filter('saudacao')('alessandra'));

    $scope.Pessoa = { Nome: "Alessandra", Idade: 40 };
}

app.controller('Aula10Controller', Aula10Controller);