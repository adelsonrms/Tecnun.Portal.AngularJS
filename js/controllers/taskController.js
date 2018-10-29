//Registra o controller
angular.module("taskApp").controller("taskController",
    function ($scope, projectApiService, taskApiService)
     {
        $scope.app = 'TECNUN Projetos e Apontamento';

        taskApiService.getAll()
            .success(function (data) { $scope.tasks = data })
            .error(function (data) { console.error(data) });

        projectApiService.getAll()
            .success(function (data) { $scope.projects = data })
            .error(function (data) { console.error(data) });

        $scope.addTask = function (task) {
            $scope.tasks.push(task)
            localStorage.setItem("tasks", angular.toJson($scope.tasks))
            delete ($scope.task);
        };

        applog('Controller inicializado com sucesso !!!', null, 'i')
    });
