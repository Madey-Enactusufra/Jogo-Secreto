let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    Voice.speak(texto, 'Brazilian Porutguese Female', {rate:1.2});
}

function mensagemIncial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemIncial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {   
        exibirTextoNaTela('h1', 'ACERTOU');
        let palavrasTentativa = tentativas > 1 ? 'TENTATIVAS' : 'TENTATIVA';
        let mensagemTentativas =`VOCÊ DESCOBRIU O NÚMERO SECRETO COM ${tentativas} ${palavrasTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'NÚMERO O NÚMERO SECRETO É MENOR');
        } else{
            exibirTextoNaTela('p', 'NÚMERO O NÚMERO SECRETO É MAIOR');
        }
        tentativas++;
        limparCampo()
    }
}
 
function gerarNumeroAleatorio() {
    let numeroEsclhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosDaLista == numeroEsclhido) {
        listaDeNumerosSorteados = [];
    }


    if(listaDeNumerosSorteados.includes(numeroEsclhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEsclhido);

        return numeroEsclhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

function reiniciarJogo() {
    numeroSecreto =gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}








