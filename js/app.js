function applog(mensagem='', dados, tipo='info') {
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