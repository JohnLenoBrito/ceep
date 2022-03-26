(function () {
    'use strict'
    $('.novoCartao').on('submit', function (events) {
        event.preventDefault()
        var conteudo = $('.novoCartao-conteudo').val().trim().replace(/\n/g, '<br>')
        if (conteudo) {
            controladoCartao.adicionaCartao(conteudo)
            $(document).trigger("precisaSincronizar")
        }
        else
            alert('Impossivel guardar o conteudo')
    })
})()