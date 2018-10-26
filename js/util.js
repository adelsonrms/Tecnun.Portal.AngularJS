function adicionaHoras(inicio, qtdHoras) {
    var dtAdiciona = Date.parse("02:00:00");
    var dtInicio = Date.parse("10:00:00");
    var dtFinal = dtInicio.add(dtAdiciona);

    return dtFinal.toString("hh:mm");
}


