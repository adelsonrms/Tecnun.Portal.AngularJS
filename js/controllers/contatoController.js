var appController = mdLista.name + "Controller";
/*
    *  registra o controller
    *  A função [modulo].controller recebe o nome do controller que esta sendo criado e é chamado uma função de callback 
    *  que recebe um argumento interno chamado $scope o qual representa o escopo da view onde o controller está sendo definido pela diretiva ng-controller.
    *  A partir do momento em quem esteja o contexto da função, é possivel definir as ações que serão interagidas com a view
*/
mdLista.controller(appController, function ($scope) {
    console.info('Controller [' + appController + '] registrado para o view ! ');
    RegistraController($scope)
});

//Função registra as chamadas do controle que encapsula as chamadas dos metodos chamados pela view no controller
function RegistraController(view) {
    try {
        view.itemInserido = 0;
        view.app = 'TECNUN Projetos e Apontamento';
        

        //Dados para teste. Um Array de objetos JSON
        var db = new Db('');

        view.tarefas = db.getTarefas();
        view.projetos = db.getProjetos();

        if (view.tarefas!=null) {applog('Lista de Tarefas recuperados', view.tarefas, 'i')}

        //Eventos capturados pelos Clicks
        view.adicionarTarefa = adicionar(tarefa);

    } catch (e) {
        applog('Ocorreu um erro no processamento do Controller > ', e, 'e')
    }
};


//Eventos capturados pelos Clicks
function adicionar(tarefa) {
    //Captura os valores do view
    view.tarefas.push(tarefa)
    view.itemInserido = 1
    view.mensagem = 'Tarefa (' + tarefa.nome + ') inserido com sucesso !';
    delete (view.tarefa);
};