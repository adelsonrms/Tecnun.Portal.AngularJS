angular.module("taskApp").factory("taskApiService",
    function ($http) {
        var _getTasks = function () {
            return $http.get('http://localhost:4000/data/tasks.json')
        };
        return {
            getAll: _getTasks,
        };
    });