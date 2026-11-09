let fromularioRegistro = document.getElementById("formTaller4")

fromularioRegistro.addEventListener("submit", formTaller4)

function formTaller4(event){

    event.preventDefault()

    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();
    let confirmarContraseña = document.getElementById("confirmarContraseña").value.trim();

    if (nombre === ""){
        document.getElementById("nombre").style.borderColor='red'
        document.getElementById("resultado").innerText = "Por favor escriba un nombre"
        return
    }
    else if (isNaN(edad) || edad === ""){
        document.getElementById("edad").style.borderColor='red'
        document.getElementById("resultado").innerText = "Por favor ingrese su edad"
        return
    }
    else if (edad < 18 || edad >100){
        document.getElementById("resultado").innerText = "Por favor ingrese una edad valida"
        document.getElementById("edad").style.borderColor='red'
        return
    }
    else if ( !correo.includes("@") || !correo.includes(".")){
    document.getElementById("resultado").innerText = "Por favor escriba un correo valido"
    document.getElementById("correo").style.borderColor='red'
    }
    else if(confirmarContraseña != contraseña){
        document.getElementById("resultado").innerText = "Las contraseñas no coinciden"
    }
    else{
        document.getElementById("resultado").innerText = `Registro exitoso. Bienvenido(a), ${nombre}`

    }
}