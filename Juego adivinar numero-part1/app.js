let numeroSecretp = Math.floor(Math.random()*10)+1;
let numeroUsuario;
let contador = 1;
let intentoDeUsuario = 3;

while (numeroUsuario != numeroSecretp) {

    numeroUsuario =parseInt(prompt("Me indicas un numero entre 1 y 10 porfavor: "));

    if (numeroUsuario == numeroSecretp) {
        alert(`Acertaste, el número es: ${numeroSecretp}. Lo realizaste ${contador} ${contador == 1 ? "vez" : "veces"}`);
    } else {
        if (numeroUsuario > numeroSecretp) {

            alert("El numero secreto es menor");    
        }else{
            alert("El numero secreto es mayor");
        }
        contador ++;

        if (contador > intentoDeUsuario) {
            alert(`Superaste el numero maximos de ${intentoDeUsuario} intentos`);
            break;
        }
    }
}