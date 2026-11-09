let formulario = document.getElementById("formTaller2")

formulario.addEventListener("submit", taller2)

function taller2(){
    event.preventDefault()
let nota = parseFloat(document.getElementById("nota").value)

//validar que la nota no sea nula con isNaN
//validar que la nota este entre 0.0 y 5.0
//validar el desmpeño
/*

4.5 a 5.0 exelente aprobado

4.0 a 4.4 bueno

3.0 a 3.9 aceptable

menor a 3.0 insuficiente

*/

if(isNaN(nota)){
    document.getElementById("resultado").innerText = "Ingrese una nota por favor"
    return;
}
else if(nota <0 || nota >5){
    document.getElementById("resultado").innerText="Nota invalida"
    return;
}
let resultado = "Aprobado"
let desmpeño ;
if (nota >=4.5){
    desmpeño = "Exelente"
}
else if (nota >=4){
    desmpeño = "Bueno"
}
else if (nota >=3){
    desmpeño = "Aceptable"
}
else{
    desmpeño = "Insuficiente"
    resultado = "No aprobado"
}

document.getElementById("resultado").innerText = `Nota: ${nota} - Desempeño: ${desmpeño} - Resultado: ${resultado}`

}