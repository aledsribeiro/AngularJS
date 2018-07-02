app.controller("Aula08Controller", function ($scope) {
    $scope.Pessoa = NovaPessoa();
    $scope.Estados = ['RS', 'SP', 'RJ'];

    $scope.Pessoas = [];

    $scope.SalvarPessoa = function (pessoa) {
        $scope.Pessoas.push(pessoa);
        $scope.Pessoa = NovaPessoa();
        //remove a iteração do click
        $scope.frm.$setUntouched();
        //volta para o estado inicial do formulário
        $scope.frm.$setPristine();
        
    }
});

function NovaPessoa() {
    return {
        nome : "",
        email :"",
        sexo: "F",
        estado: "SP"
    }
}