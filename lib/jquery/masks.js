jQuery(function ($) {
    $('.data').mask('00/00/0000');
    $('.data_placeholder').mask("00/00/0000", { placeholder: "__/__/____" });
    $('.hora').mask('00:00:00');
    $('.hora_placeholder').mask("00:00", { placeholder: "__:__" });
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.cnpj').mask('00.000.000/0000-00', { reverse: true });
    $('.money').mask('000.000.000.000.000,00', { reverse: true });
    $('.money2').mask("#.##0,00", { reverse: true });
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/, optional: true
            }
        }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', { reverse: true });
    $('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true });
    $('.fallback').mask("00r00r0000", {
        translation: {
            'r': {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "__/__/____"
        }
    });
    $('.selectonfocus').mask("00/00/0000", { selectOnFocus: true });


    //$('#data, .data').mask("99/99/9999");
    //$('#hora, .hora').mask("hh:nn");
    //$('#cnpj,.cnpj').mask("99.999.999/9999-99");
    //$('#cep,.cep').mask("99.999-999");
    $('#telefone-fixo,.telefone-fixo').mask("(99) 9999-9999");
    $('#telefone-celular,.telefone-celular').mask("(99) 99999-9999");
    // Se for um campo input do tipo date, mostrar máscara somente no Safari e Firefox pra evitar problemas com validação e mobile
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (function(p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
    if (isFirefox || isSafari) {
      $('#prazo,.prazo').mask("99/99/9999");
    }
  
    //Máscara de telefone fixo ou celular automático
    //$.mask.definitions['~'] = ['+-'];
    $('#telefone-celular-fixo,.telefone-celular-fixo').focusout(function() {
        var phone, element;
        element = $(this);
        element.unmask();
        phone = element.val().replace(/\D/g, '');
        if (phone.length > 10) {
            element.mask('(99) 99999-999?9');
        } else {
            element.mask('(99) 9999-9999?9');
        }
    }).trigger('focusout');
});

$(document).ready(function () {
 
});