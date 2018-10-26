/*
 * Inicializa o modulo
 */
var mdLista;
try {

    var modulo = 'listaTelefonica';
    mdLista = angular.module(modulo, []);
    //Exibe detalhes da instacia do objeto root do angula no log de desenvolvimento (chrome ou ie)
    console.info('Angula está instalado e inicializado : ', 'Versão  > ' + angular.version.full);
    console.info('Modulo "' + mdLista.name + '" inicializado ! e pronto pra uso.');
} catch (e) {
    console.error('Ocorreu um erro na inicialização do Modulo e seus serviços > ', e)
}
finally {
    console.assert(mdLista != null, "Erro na instancia do modulo");
}