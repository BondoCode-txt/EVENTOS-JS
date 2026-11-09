let formTaller5 = document.getElementById("formTaller5")

formTaller5.addEventListener("submit", calculadora)

function calculadora(event){
    event.preventDefault()

    let operacion = document.getElementById("operacion").value
    let resultado = document.getElementById("resultado")

    let n1 = parseFloat(document.getElementById("n1").value.trim())
    let n2 = parseFloat(document.getElementById("n2").value.trim())

    let total = 0
    let simbolo = ""

    if (isNaN(n1) || isNaN(n2)){
        resultado.innerText = "Por favor ingrese los valores."
        resultado.className = "mensaje error"
        return
    }

    if (operacion === ""){
        resultado.innerText = "Por favor elija una operacion"
        resultado.className = "mensaje error"
        return
    }


    switch (operacion){
        case "suma":
            total = n1 + n2
            simbolo = "+"
            break

        case "resta":
            total = n1 - n2
            simbolo = "-"
            break

        case "multiplicacion":
            total = n1 * n2
            simbolo = "x"
            break

        case "division":
            total = n1 / n2
            simbolo = "/"
            break
    }

    if (simbolo === "/" && n2 === 0){
        resultado.innerText = "No se puede dividir por cero."
        resultado.className = "mensaje error"
        return
    }
    resultado.innerText = `${n1} ${simbolo} ${n2} = ${total} `
    resultado.className = "mensaje exito"
    
}
