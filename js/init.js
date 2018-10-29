$(document).ready(function () {
    var options = {
        selectOnClose: true,
        templateResult: formatState
    };

    $('select').select2(options);
    configurarInputs();

    $('.percentual').mask('9,99%');
    $('.money').mask('R$ 9,99.99');


});
function configurarInputs() {
    $('input').addClass('form-control');
    $('select').addClass('Combo');

}

function formatState(state) {
    if (!state.id) {
        return state.text;
    }
    var baseUrl = "/img";
    var $state = $(
        '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
};