const imgCafe = document.getElementById('imgCafe');

document.addEventListener('keydown', function(evento){

    if(evento.key === 'ArrowUp' || evento.key === 'ArrowDown' || evento.key === 'ArrowLeft' || evento.key === 'ArrowRight' ){

        flipImage(evento.key);

    }

});

function flipImage(direcao){

    const eixoX = (direcao ===  'ArrowLeft' || direcao === 'ArrowRight') ? -1 : 1;
    const eixoY = (direcao === 'ArrowUp' || direcao === 'ArrowDown') ? -1 : 1;
    imgCafe.style.transform = `ScaleX(${eixoX}) ScaleY(${eixoY})`

}