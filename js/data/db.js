//Contructor Function
var Db = function (nome) {
    this.getTarefas = function () {
        var ret = 
        [
                { data: "01/10/2018", inicio: "09:00", fim: "18:00", projeto: "1", atividade:"1", usuario:"1"},
                { data: "02/10/2018", inicio: "09:00", fim: "18:00", projeto: "1", atividade:"1", usuario:"1" },
                { data: "03/10/2018", inicio: "09:00", fim: "18:00", projeto: "1", atividade:"1", usuario:"1" }
            ];
        return ret;
    };
    this.getProjetos = function ()
    {
        return (
            [
                { id:"1", "nome": "CodeWeb"},
                { id:"2", "nome": "SisCom" },
                { id:"3", "nome": "infraSys" },
                { id:"4", "nome": "SD" },
            ]
        );
    };
};

