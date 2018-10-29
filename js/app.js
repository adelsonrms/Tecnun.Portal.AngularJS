/*
 * Inicializa o modulo
 */
var app;

try {

    app = angular.module('taskApp', ["ngMessages", "ngRoute"]);

    //Exibe detalhes da instacia do objeto root do angula no log de desenvolvimento (chrome ou ie)
    console.info('Angula está instalado e inicializado : ', 'Versão  > ' + angular.version.full);
    console.info('Modulo "' + app.name + '" inicializado ! e pronto pra uso.');
} catch (e) {
    console.error('Ocorreu um erro na inicialização do Modulo e seus serviços > ', e)
}
finally {
    console.assert(app != null, "Erro na instancia do modulo");
}

function applog(mensagem, dados, tipo) {
    switch (tipo) {
        case 'i':
            console.info(mensagem, dados);
            break;
        case 'a':
            console.warn(mensagem, dados);
            break;
        case 'e':
            console.error(mensagem, dados);
            break;
        default:
            console.log(mensagem, dados);
            break;
    }
}