var app = angular.module('appSaudacao', []);

app.filter('ola', function () {
    return function (nome) {
        return "Ola " + nome;
    }
});