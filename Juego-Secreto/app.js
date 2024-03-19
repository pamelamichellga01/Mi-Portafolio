let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;

}
 //console.log(numeroSecreto);

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    //console.log(intentos);

    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero secreto ${intentos} ${(intentos === 1) ? 'vez':'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroDeUsuario>numeroSecreto) {
        asignarTextoElemento("p","El numero secreto es menor");
    }else{
        asignarTextoElemento("p","el numero secreto es mayor");
    }}
    intentos ++;
    limpiarCaja();
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value= "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles ");
    }else {
        //Si es numero generado esta en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condisionesIniciales() {
    asignarTextoElemento("h1","Juego del numero secreto!");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensjae de intervalo de número
    //Generar el número aleatorio 
    //Inicializar el número intentos
    condisionesIniciales();
    //Deshabilitar el botos de nuevo jeugo 
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condisionesIniciales();