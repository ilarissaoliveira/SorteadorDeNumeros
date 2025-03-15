function sortear(){
    let quantidade = parseInt(document.getElementById('qtotal').value)
    let de = parseInt(document.getElementById('numini').value)
    let ate = parseInt(document.getElementById('numfim').value)

    let sorteados = []
    let nSorteado

    for(let i = 0; i < quantidade; i++){
        nSorteado = numeroAleatorio(de,ate)
    
        while (sorteados.includes(nSorteado)) {
            nSorteado = numeroAleatorio(de, ate)
        }
        sorteados.push(nSorteado)
    }
    

    
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<h1><p><label class="texto__paragrafo">Números sorteados: ${sorteados}</label></p></h1>`
    alterarStatusBotao()
}

function numeroAleatorio(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min 
}

function alterarStatusBotao() {
    let botao = document.getElementById('bt-reiniciar')
    if (botao.classList.contains('container__botao-off')) {
     botao.classList.remove('container__botao-off')                                
     botao.classList.add('container__botao')
    } else {
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-off')
    }
}

function reiniciar() {                                  
    document.getElementById('qtotal').value = '' 
    document.getElementById('numini').value = ''
    document.getElementById('numfim').value = ''
    document.getElementById('resultado').innerHTML = '<h1><label class="texto__paragrafo"></label></h1>'
    alterarStatusBotao()                                
}