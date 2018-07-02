app.controller("aula07Controller", function ($scope) {
    $scope.listaNomes = ["Alessandra", "Jeffersonn", "Nina", "Ralf", "Rajah"];

    console.log($scope.listaNomes);

    $scope.Pessoas = [];

    $scope.Pessoas.push(
        { nome: "Alessandra", idade : 40 }
    )

    $scope.adicionarPessoa = function () {
        var nome = document.getElementById("txtNomePessoa");
        $scope.Pessoas.push(
            { nome: nome.value, idade: 40 }
        )

        nome.value = "";
    }
})