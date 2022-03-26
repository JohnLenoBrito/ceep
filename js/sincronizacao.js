(function () {
    'use strict'
    var usuario = "email@mail.com.br"
    $.getJSON("httpS://ceep.herokuapp.com/cartoes/carregar?callback=?", { usuario: usuario }, function (dados) {
        dados.cartoes.forEach(function (cartao) {
            controladoCartao.adicionaCartao(cartao.conteudo, cartao.cor)
        });
    })

    $("#sync").on("precisaSincronizar", function () {
        $(this).removeClass("botaoSync--sincronizado")
        $(this).addClass("botaoSync--esperando")
        var cartoes = []
        $('.cartao').each(function () {
            var cartao = []
            cartao.conteudo = $(this).find('p').html()
            cartao.cor = $(this).css('background-color')
            cartoes.push(cartao)
        })

        var mural = {
            usuario: "johnleno2@hotmail.com"
            , cartoes: cartoes
        }

        $.ajax({
            url: "https://ceep.herokuapp.com/cartoes/salvar",
            method: "POST",
            data: mural,
            success: function (res) {

                $(this).addClass("botaoSync--sincronizado")
                console.log(res.quantidade + " cortões salvos em " + res.usuario)
            },
            error: function () {

                $(this).addClass("botaoSync--deuRuim")
                console.log("Não foi possivel salvar o mural")
            },
            complete: function () {
                $(this).removeClass("botaoSync--esperando")
            }
        })
    })

    $('#sync').each(function () {
        
        $(document).trigger("precisaSincronizar")
    })

})()