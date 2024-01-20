
//variables
let NumeroSecreto = 0;
let contador = 0;
let numerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//esto es para el texto del juego 
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === NumeroSecreto) {
     asignarTextoElemento("p",`acertaste el numero en ${contador} ${(contador === 1) ? "intento" : "intentos"}`);
   
     //activar boton y quitar atributo
     document.getElementById("reiniciar").removeAttribute("disabled")

    } else {
        if (numeroDeUsuario > NumeroSecreto ){
            asignarTextoElemento("p","el numero secreto es menor");
        } else {
            asignarTextoElemento("p","el numero secreto es mayor");  
        }
       contador++;
       limpiarCaja();
    }
    return;
} 


//esto es para limpiar la caja
function limpiarCaja(){
 document.querySelector("#valorUsuario").value = "";
}

// esto es para que los numeros sean aleatorios y sin decimales
function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(numerosSorteados);

//si ya sorteamos todos los numeros
if (numerosSorteados.length == numeroMaximo){
    asignarTextoElemento("p","ya se sortiaron todos los numeros posibles");


}else{


    //si el numero generoado esta en la lista
    if (numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
//mensajes iniciales
function condicionesIniciales(){
//mensaje de texto al inicio
asignarTextoElemento("h1","juego del numero secreto");
asignarTextoElemento("p",`por favor ingresa un numero del 1 al ${numeroMaximo}`);
NumeroSecreto = generarNumeroSecreto();
intentos = 1;
}


//restablecer juego
function reiniciarJuego(params) {
    //limpiar caja
    limpiarCaja();

    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
   
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}

condicionesIniciales();