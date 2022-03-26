(function () {
    'use strict'
    var contador = $('.cartao').length    
    function adicionaCartao(conteudo, cor) {
        
        contador++
        var tipoCartao = decideTipoCartao(conteudo)
        var cartao = $('<article>').addClass('cartao').addClass(tipoCartao).attr('id', 'cartao_' + contador).css('background', cor)
        var divBtnRemove = $('<div>').addClass('opcoesDoCartao')
        var btnRemove = $('<button>').addClass('opcoesDoCartao-remove').attr('data-ref', contador).text('X')
        var btnEdita = $('<button>').addClass('opcoesDoCartao-edita').text('E')
        var tagConteudo = $('<p>').addClass('cartao-conteudo').html(conteudo).attr('contenteditable', 'false')
        cartao.append(divBtnRemove.append(btnRemove).append(btnEdita)).append(tagConteudo).click(function (event) {
            debugger
            var elemento = $(event.target)
            if(elemento.hasClass('opcoesDoCartao-edita'))
                ehPraEditar($(this))

            else if(elemento.hasClass('opcoesDoCartao-remove'))
                removeCartao()
        })
        $('.mural').prepend(cartao)
    }

    function decideTipoCartao(conteudo) {
        var quebras = conteudo.split("<br>").length

        var totalDeLetras = conteudo.replace(/<br>/g, " ").length

        var ultimoMaior = ""

        conteudo.replace(/<br>/g, " ")
            .split(" ")
            .forEach(function (palavra) {
                if (palavra.length > ultimoMaior.length)
                    ultimoMaior = palavra
            })

        var tamMaior = ultimoMaior.length

        var tipoCartao = "cartao--textoPequeno"

        if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55)
            tipoCartao = "cartao--textoGrande"

        else if (tamMaior < 12 && quebras < 6 && totalDeLetras < 75)
            tipoCartao = "cartao--textoMedio"

        return tipoCartao
    }

    function ehPraEditar(cartao) {
        var tagConteudo = cartao.find('.cartao-conteudo')

        if(tagConteudo.attr('contenteditable') == 'true')
            tagConteudo.attr('contenteditable', 'false')
        else
            tagConteudo.attr('contenteditable', 'true')        
    }

    window.controladoCartao = {
        adicionaCartao: adicionaCartao,
        idUltimoCartao: contador
    }
})()