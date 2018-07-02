app.service('operacoes', function () {

    console.log("criou o service de operações");

    this.Somar = function (valor1, valor2) {
        return valor1 + valor2;
    };

    this.Subtrair = function (valor1, valor2) {
        return valor1 - valor2;
    };
});