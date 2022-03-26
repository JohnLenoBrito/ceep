var mural = document.querySelector(".mural")
var btn = document.querySelector("#mudaLayout")

function mudaLayout(){
    mural.classList.toggle("mural--linha")
}

function trocaTexto() {
    btn.textContent = mural.classList.contains("mural--linha") ? "Linhas" : "Blocos"
}

btn.addEventListener('click', trocaTexto)
btn.addEventListener('click', mudaLayout)