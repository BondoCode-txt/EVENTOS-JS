let formulario = document.getElementById("formTaller3");

formulario.addEventListener("submit", taller3)

function taller3 (){
    event.preventDefault()

    let numero1 = parseInt(document.getElementById("numero1").value)
    let numero2 = parseInt(document.getElementById("numero2").value)
    let numero3 = parseInt(document.getElementById("numero3").value)

    if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
        document.getElementById("resultado").innerText = "Ingrese un numero"
        return;
    }
    else if(numero1 > numero2 || numero1 > numero3){
        document.getElementById("resultado").innerText = `El ${numero1} es mayor que el ${numero2} y el ${numero3}`
    }
    else if(numero2 > numero1 || numero2 > numero3){
        document.getElementById("resultado").innerText = `El ${numero2} es mayor que el ${numero1} y el ${numero3}`
    }
    else if(numero3 > numero1 || numero3 > numero2){
        document.getElementById("resultado").innerText = `El ${numero3} es mayor que el ${numero1} y el ${numero2}`
    }
    else if(numero1 === numero2 && numero1 === numero3){
        document.getElementById("resultado").innerText = `El ${numero1} es igual al ${numero2} y el ${numero3}`
    }


}   