var btns = document.querySelectorAll('.opcoesDoCartao-remove')

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', removeCartao);

}

function removeCartao(refDoBtn) {
    
    var cartao = document.querySelector('#cartao_' + refDoBtn)
    cartao.classList.add('cartao--remove')
    cartao.addEventListener('transitionend', function () {
        cartao.remove()
    })
}