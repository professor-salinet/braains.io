const posicaoInferiorInicial = 0;
const posicaoEsquerdaInicial = 0;
const medida = "px";

const imgCenario = document.createElement('img');
imgCenario.src = './cenario.jpg';
imgCenario.style.position = "absolute";
imgCenario.style.bottom = posicaoInferiorInicial + medida;
imgCenario.style.left = posicaoEsquerdaInicial + medida;
imgCenario.style.width = (window.screen.width * 4) + medida;
imgCenario.style.height = (window.screen.height * 4) + medida;
imgCenario.style.zIndex = -1;
document.body.appendChild(imgCenario);

const imgAvatar = document.createElement('img');
imgAvatar.src = './avatar.png';
imgAvatar.style.position = "absolute";
// imgAvatar.style.top = (window.screen.width / 4) + medida;
// imgAvatar.style.left = (window.screen.height / 4) + medida;
imgAvatar.style.top = "50%";
imgAvatar.style.left = "50%";
imgAvatar.style.width = "100px";
imgAvatar.style.height = "100px";
imgAvatar.style.zIndex = 999;
imgAvatar.style.rotate = 0 + "deg";
document.body.appendChild(imgAvatar);

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

            console.clear();
            console.log("event.pageX: ", event.pageX);
            console.log("event.pageY: ", event.pageY);
            return false;
        } catch (e) {
            console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para o evento onmousemove. Veja o erro: ", e);
        }
    }

    document.onkeyup = handleKeyUp;
    function handleKeyUp(event) {
        try {
            event = event || window.event; // IE-ism
            console.log(event.keyCode);
            switch (event.keyCode) {
                case 39: // seta para direita
                    break;
                case 37: // seta para esquerda
                    break;
                case 38: // seta para cima
                    break;
                case 40: // seta para baixo
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