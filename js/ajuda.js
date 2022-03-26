$('#ajuda').on('click', function () {
    
    $.getJSON('https://ceep.herokuapp.com/cartoes/instrucoes', function (dados) {
        var ajudas = dados.instrucoes

        ajudas.forEach(function (ajuda) {
            controladoCartao.adicionaCartao(ajuda.conteudo, ajuda.cor)
        })
    })
})