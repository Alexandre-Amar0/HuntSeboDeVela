const segundo = document.getElementById('secondReloadDesktop')
const minuto = document.getElementById('minuteReloadDesktop')
let contadorSegundos = 300;
let finalMinutos = 5;

function countDownReload() {
    contadorSegundos = contadorSegundos-1; 
    finalMinutos = Math.floor(contadorSegundos / 60) % 60
    finalSegundos = Math.floor(contadorSegundos) % 60
    minuto.innerHTML = formatoTempo(finalMinutos, ":")
    segundo.innerHTML = formatoTempo(finalSegundos, "")
}

function formatoTempo(tempo, tempoCaracter){
    if (tempo < 10) {
        return `0${tempo}${tempoCaracter}`
    } else {
        return `${tempo}${tempoCaracter}`
    }
}

countDownReload();
setInterval(countDownReload, 1000)


const segundoMobile = document.getElementById('secondReloadMobile')
const minutoMobile = document.getElementById('minuteReloadMobile')
let contadorSegundosMobile = 300;
let finalMinutosMobile = 5;

function countDownReloadMobile() {
    contadorSegundosMobile = contadorSegundosMobile-1; 
    finalMinutosMobile = Math.floor(contadorSegundosMobile / 60) % 60
    finalSegundosMobile = Math.floor(contadorSegundosMobile) % 60
    minutoMobile.innerHTML = formatoTempo(finalMinutosMobile, ":")
    segundoMobile.innerHTML = formatoTempo(finalSegundosMobile, "")
}

function formatoTempo(tempo, tempoCaracter){
    if (tempo < 10) {
        return `0${tempo}${tempoCaracter}`
    } else {
        return `${tempo}${tempoCaracter}`
    }
}

countDownReloadMobile();
setInterval(countDownReloadMobile, 1000)

/*=====================================================================*/

function reload() {
    location.href = "locker.html";
}
setInterval(reload, 299000)