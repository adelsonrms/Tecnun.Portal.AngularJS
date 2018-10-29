angular.module("taskApp").factory("projectApiService",
    function ($http) {
        var _getProjects = function () {
            return $http.get('http://localhost:4000/data/projeto.json')
        };
    return {
        getAll: _getProjects,
    };
});