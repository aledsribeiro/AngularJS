app.factory('Pessoa', function () {

    var Pessoa = function () {
        this.Nome = "Ale";
        this.Idade = "";

        this.Cumprimentar = function () {
            return "Ola " + this.Nome + "!";
        }

        return Pessoa;
    }
});