angular.module("taskApp").config(
    function ($routeProvider) {
    //Configura a Rota : http://host:porta/tarefas
    $routeProvider.when("/tasks", {
         templateUrl: "view/tarefas.html",
         controller: "taskController"
        //,resolve: {
        //    projects: function (ProjetoApiService) {
        //        return ProjetoApiService.getProjects();
        //	}
        //}
    })
    .otherwise({ redirectTo: "/404"});
});
