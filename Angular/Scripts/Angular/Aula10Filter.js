app.filter('saudacao', function () {
    return function (nome) {
        return "Ola " + nome;
    }
});