(function () {
    'use strict'
    $("#busca").on("input", function () {
        var busca = $(this).val().trim()
        if(busca){
            $('.cartao').hide().filter(function () {
                debugger
                var conteudo = $(this).find(".cartao-conteudo").text().match(new RegExp(busca, 'i'))
                var mexer = conteudo.input.split(busca)
                var ver = ''
                mexer.forEach(function(element) {
                    ver += element + "<b>" + busca + "</b>"
                });

                conteudo.text(ver)
                return conteudo
            }).show()
        }
        else
            $(".cartao").show()
    })
})()