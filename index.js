const dia = document.getElementById('dayP')
const hora = document.getElementById('hourP')
const minuto = document.getElementById('minuteP')
const segundo = document.getElementById('secondP')
/*const lancamento = "15 nov, 2023"*/

function countDown(){
    const dataLanc = new Date("November 16, 2023 21:05:00")
    const hoje = new Date()
    const segTotal = (dataLanc - hoje)/1000
    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 /60) % 24
    const finalMinutos = Math.floor(segTotal / 60) % 60
    const finalSegundos = Math.floor(segTotal) % 60

    dia.innerHTML = formatoTempo(finalDias, ":")
    hora.innerHTML = formatoTempo(finalHoras, ":")
    minuto.innerHTML = formatoTempo(finalMinutos, ":")
    segundo.innerHTML = formatoTempo(finalSegundos, "")

    if (finalDias <= 0 && finalHoras <= 0 && finalMinutos <= 0  && finalSegundos <= 0) {
        location.href = "locker.html" 
    }
}

function formatoTempo(tempo, tempoCaracter){
    if (tempo < 10) {
        return `0${tempo}${tempoCaracter}`
    } else {
        return `${tempo}${tempoCaracter}`
    }
}

function password() {
    var password = document.getElementById('passwordInput').value;
    if (password == "Custodes Sapientiea") {
        location.href = "agatha.html";
    } else {
        alert('Pare! Eles vão te encontrar.')
    }
}

countDown();
setInterval(countDown, 1000)