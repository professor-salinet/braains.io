const posicaoInferiorInicial = 0;
const posicaoEsquerdaInicial = 0;
const medida = "px";
const alturaInicialAvatar = 100; // em pixels
const larguraInicialAvatar = 100; // em pixels
const tamanhoMovimento = 10;

const imgCenario = document.createElement('img');
imgCenario.src = './cenario.jpg';
imgCenario.style.position = "fixed";
imgCenario.style.top = posicaoInferiorInicial + medida;
imgCenario.style.left = posicaoEsquerdaInicial + medida;
imgCenario.style.width = (window.screen.width * 4) + medida;
imgCenario.style.height = (window.screen.height * 4) + medida;
imgCenario.style.zIndex = -1;
document.body.appendChild(imgCenario);

const imgAvatar = document.createElement('img');
imgAvatar.src = './avatar.png';
imgAvatar.style.position = "absolute";
imgAvatar.style.top = ((window.innerHeight / 2) - (alturaInicialAvatar / 2)) + medida;
imgAvatar.style.left = ((window.innerWidth / 2) - (larguraInicialAvatar / 2)) + medida;
imgAvatar.style.width = larguraInicialAvatar + medida;
imgAvatar.style.height = alturaInicialAvatar + medida;
imgAvatar.style.zIndex = 999;
imgAvatar.style.rotate = 0 + "deg";
document.body.appendChild(imgAvatar);

// console.log("window.innerWidth: ", window.innerWidth);
// console.log("window.innerHeight: ", window.innerHeight);

function moverCenarioParaDireita() {
    let leftCenario = parseInt(imgCenario.style.left.replace("px",""));
    imgCenario.style.left = (leftCenario - tamanhoMovimento) + "px";
}

function moverCenarioParaEsquerda() {
    let leftCenario = parseInt(imgCenario.style.left.replace("px",""));
    imgCenario.style.left = (leftCenario + tamanhoMovimento) + "px";
}

function moverCenarioParaCima() {
    let topCenario = parseInt(imgCenario.style.top.replace("px",""));
    imgCenario.style.top = (topCenario + tamanhoMovimento) + "px";
}

function moverCenarioParaBaixo() {
    let topCenario = parseInt(imgCenario.style.top.replace("px",""));
    imgCenario.style.top = (topCenario - tamanhoMovimento) + "px";
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
            console.log(event.keyCode);
            switch (event.keyCode) {
                case 39:
                case 68:
                    console.log("seta/movimento para direita");
                    moverCenarioParaDireita();
                    break;
                case 37:
                case 65:
                    console.log("seta/movimento para esquerda");
                    moverCenarioParaEsquerda();
                    break;
                case 38:
                case 87:
                    console.log("seta/movimento para cima");
                    moverCenarioParaCima();
                    break;
                case 40:
                case 83:
                    console.log("seta/movimento para baixo");
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