var conTempo;
var timeStart = 60; 

function iniciarJogo(){
   var nomeJogador = document.getElementById('nomeJogador');
   var raJogador = document.getElementById('raJogador');

   if(!validador(nomeJogador, raJogador))
        return;
  
   nomeJogador.setAttribute('disabled','true');
   raJogador.setAttribute('disabled','true');
   jogadorAtual = {nome: nomeJogador.value, ra: raJogador.value, pontos: 0};

   blocoImagem.classList.toggle('abreFechaRank');
   btnIniciar.classList.toggle('abreFechaRank');
   btnRecomeçar.classList.toggle('abreFechaRank');

   startCountdown();
}

function startCountdown() {
       if((timeStart - 1) >= 0){
           if(qntResposta < 4){
                timeStart = timeStart - 1;
                tempo.innerText =  timeStart;
                conTempo = setTimeout('startCountdown()',1000);
            }
            else if (!jogoFinalizado){
                contaPonto(timeStart);
            }
       }
}


function reiniciarJogo(){
    var nome = document.getElementById('nomeJogador');
    var ra = document.getElementById('raJogador');

    nome.value = "";
    ra.value = "";
    nome.removeAttribute('disabled');
    ra.removeAttribute('disabled');
    jogadorAtual = undefined;
    jogoFinalizado = false;

    primeiroClick = 0;
    qntResposta = 0;
    blocoImagem.classList.toggle('abreFechaRank');
    btnIniciar.classList.toggle('abreFechaRank');
    btnRecomeçar.classList.toggle('abreFechaRank');
    perguntasGeral.classList.toggle('abreFechaRank');

    perguntaseRespostas.setAttribute('display', 'block');
    deltoid.setAttribute('display', 'block');
    extensor.setAttribute('display', 'block');
    triceps.setAttribute('display', 'block');
    biceps.setAttribute('display', 'block');

    clearTimeout(conTempo);
    tempo.innerText = 60;
    timeStart = 60;
}


function contaPonto(pontos) {
    jogadorAtual.pontos += pontos;
}


function validador(nomeJogador, raJogador){
    if((nomeJogador.value == '') || (raJogador.value == '')){
        alert('Digite seu Nome e RA para começar a jogar !');
        return false;
    }
    return true;
}

