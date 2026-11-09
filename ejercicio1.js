document.getElementById("botonSumar").addEventListener("click", function (event){

    event.preventDefault();
    let n1 = parseFloat(document.getElementById("n1").value)
    let n2 = parseFloat(document.getElementById("n2").value)
    let suma = n1 + n2

    if (isNaN (n1) || isNaN(n2)) {
        alert("Escribe los dos numeros")
        return
    } else {

    alert(`Suma ${suma}`)}
} )