const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const form = document.getElementById("novoItem")
const contadores = document.querySelectorAll(".contador");
tempoObjetivo = new Date ();


form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const objetivo = evento.target.elements['objetivo'];
    document.querySelector(".botao").textContent = objetivo.value;
    var dateControl = document.querySelector('input[type="date"]');
    tempoObjetivo = new Date(dateControl.value); 
    console.log(tempoObjetivo);
})

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {

    document.getElementById("dias").textContent = calculaTempo(tempoObjetivo)[0];
    document.getElementById("horas").textContent = calculaTempo(tempoObjetivo)[1];
    document.getElementById("min").textContent = calculaTempo(tempoObjetivo)[2];
    document.getElementById("seg").textContent = calculaTempo(tempoObjetivo)[3];

}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();