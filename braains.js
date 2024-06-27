const medida = "px";
const medidaRotacao = "deg";
const alturaInicialAvatar = 100; // em pixels
const larguraInicialAvatar = 100; // em pixels
const tamanhoMovimento = 20;
const centroTelaHorizontal = window.innerWidth / 2;
const centroTelaVertical = window.innerHeight / 2;
const metadeLarguraAvatar = larguraInicialAvatar / 2;
const metadeAlturaAvatar = alturaInicialAvatar / 2;
const multiplicadorTamanhoCenario = 2;

const posicaoCenarioSuperiorInicial = 0;
const posicaoCenarioEsquerdaInicial = 0;
const larguraTotalCenario = window.screen.width * multiplicadorTamanhoCenario;
const alturaTotalCenario = window.screen.height * multiplicadorTamanhoCenario;

const divCenario = document.createElement("div");
divCenario.style.position = "fixed";
divCenario.style.top = posicaoCenarioSuperiorInicial + medida;
divCenario.style.left = posicaoCenarioEsquerdaInicial + medida;
// divCenario.style.width = larguraTotalCenario + medida;
// divCenario.style.height = alturaTotalCenario + medida;
divCenario.style.zIndex = -1;

const imgCenario = document.createElement('img');
imgCenario.src = './cenario.jpg';
imgCenario.style.position = "absolute";
imgCenario.style.top = posicaoCenarioSuperiorInicial + medida;
imgCenario.style.left = posicaoCenarioEsquerdaInicial + medida;
// imgCenario.style.width = larguraTotalCenario + medida;
// imgCenario.style.height = alturaTotalCenario + medida;
imgCenario.style.zIndex = -1;
divCenario.appendChild(imgCenario);

var mtzAirDrop = [];

function novoAirDropImg() {
    let elementTemp = document.createElement('img');
    elementTemp.src = './img/units/air-drop.webp';
    elementTemp.style.position = "absolute";
    elementTemp.style.top = Math.floor(Math.random() * 1000) + medida;
    elementTemp.style.left = Math.floor(Math.random() * 1000) + medida;
    // elementTemp.style.width = larguraTotalCenario + medida;
    // elementTemp.style.height = alturaTotalCenario + medida;
    elementTemp.style.zIndex = 999;
    mtzAirDrop.push(elementTemp);
    divCenario.appendChild(mtzAirDrop[mtzAirDrop.length - 1]);
}

for (let n = 1; n <= 10; n++) {
    novoAirDropImg();
}

document.body.appendChild(divCenario);

var larguraNaturalCenario;
var alturaNaturalCenario;
var poll = setInterval(function () {
    if (imgCenario.naturalWidth) {
        clearInterval(poll);
        larguraNaturalCenario = imgCenario.naturalWidth;
        alturaNaturalCenario = imgCenario.naturalHeight;
        divCenario.style.width = larguraNaturalCenario + medida;
        divCenario.style.height = alturaNaturalCenario + medida;
        console.log(imgCenario.naturalWidth, imgCenario.naturalHeight);
    }
}, 10);

const posicaoAvatarSuperiorInicial = centroTelaVertical - metadeAlturaAvatar;
const posicaoAvatarEsquerdaInicial = centroTelaHorizontal - metadeLarguraAvatar;
const imgAvatar = document.createElement('img');
imgAvatar.src = './avatar.png';
imgAvatar.style.position = "fixed";
imgAvatar.style.top = posicaoAvatarSuperiorInicial + medida;
imgAvatar.style.left = posicaoAvatarEsquerdaInicial + medida;
imgAvatar.style.width = larguraInicialAvatar + medida;
imgAvatar.style.height = alturaInicialAvatar + medida;
imgAvatar.style.zIndex = 999;
imgAvatar.style.rotate = 0 + medidaRotacao;
document.body.appendChild(imgAvatar);

function moverCenarioParaDireita() { // declaração da função que move o cenário para a esquerda, enquanto o avatar se "move" para a direita
    let leftCenario = parseInt(divCenario.style.left.replace("px","")); // declaração da variável leftCenario que captura a posição da esquerda do cenário
    let posicaoFinalDireitaCenario = parseInt(divCenario.style.width.replace("px","")) - centroTelaHorizontal - metadeLarguraAvatar; // declaração da variável posicaoFinalDireitaCenario que define a posição final do cenário, qual seja a fórmula: o tamanho total do cenário, menos metade do tamanho da tela, menos metade do tamanho do avatar
    if (Math.abs(leftCenario) < posicaoFinalDireitaCenario) { // valida se a posição da esquerda do cenário é "menor" que a posição final da direita do cenário, utilizando a função Math.abs() para remover o negativo do número da variável "leftCenario"
        divCenario.style.left = (leftCenario - tamanhoMovimento) + "px"; // move o cenário para a esquerda, utilizando css
    } // fim do bloco de códigos da validação if
} // fim do bloco de códigos da função moverCenarioParaDireita()

function moverCenarioParaEsquerda() {
    let leftCenario = parseInt(divCenario.style.left.replace("px",""));
    if (leftCenario < posicaoAvatarEsquerdaInicial) {
        divCenario.style.left = (leftCenario + tamanhoMovimento) + "px";
    }
}

function moverCenarioParaCima() {
    let topCenario = parseInt(divCenario.style.top.replace("px",""));
    if (topCenario < parseInt(imgAvatar.style.top.replace("px",""))) {
        divCenario.style.top = (topCenario + tamanhoMovimento) + "px";
    }
}

function moverCenarioParaBaixo() {
    let topCenario = parseInt(divCenario.style.top.replace("px",""));
    let posicaoFinalBaixoCenario = parseInt(divCenario.style.height.replace("px","")) - centroTelaVertical - metadeAlturaAvatar; // declaração da variável posicaoFinalDireitaCenario que define a posição final do cenário, qual seja a fórmula: o tamanho total do cenário, menos metade do tamanho da tela, menos metade do tamanho do avatar
    if (Math.abs(topCenario) < posicaoFinalBaixoCenario) { // valida se a posição da esquerda do cenário é "menor" que a posição final da direita do cenário, utilizando a função Math.abs() para remover o negativo do número da variável "leftCenario"
        divCenario.style.top = (topCenario - tamanhoMovimento) + "px";
    }
    console.log("topCenario: ", topCenario);
    console.log("posicaoFinalBaixoCenario: ", posicaoFinalBaixoCenario);
}

(function() { // execução em tempo real das linhas de código do bloco de função inominada
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        try {
            var eventDoc,
                doc,
                body;

            event = event || window.event; // IE-ism

            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }

            let xArroundImg = event.pageX - (parseInt(imgAvatar.style.left.replace("px","")) + (larguraInicialAvatar / 2));
            let yArroundImg = event.pageY - (parseInt(imgAvatar.style.top.replace("px","")) + (alturaInicialAvatar / 2));
            let imgAvatarAngleDeg = Math.atan2(yArroundImg, xArroundImg) * 180 / Math.PI;
            imgAvatar.style.rotate = imgAvatarAngleDeg + "deg";
            return false;
        } catch (e) {
            console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para o evento onmousemove. Veja o erro: ", e);
        }
    }

    document.onkeydown = handleKeyDown;
    function handleKeyDown(event) {
        try {
            event = event || window.event; // IE-ism
            // console.log(event.keyCode); // exibe o código da tecla pressionada
            switch (event.keyCode) {
                case 39:
                case 68:
                    // console.log("seta/movimento para direita");
                    moverCenarioParaDireita();
                    break;
                case 37:
                case 65:
                    // console.log("seta/movimento para esquerda");
                    moverCenarioParaEsquerda();
                    break;
                case 38:
                case 87:
                    // console.log("seta/movimento para cima");
                    moverCenarioParaCima();
                    break;
                case 40:
                case 83:
                    // console.log("seta/movimento para baixo");
                    moverCenarioParaBaixo();
                    break;
                default:
                    console.error("tecla não programada ainda...");
                    break;
            }
        } catch (e) {
            console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para o evento onkeyeup. Veja o erro: ", e);
        }
    }
})();