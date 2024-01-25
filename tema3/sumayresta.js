var numeros= [1,2,3]

function mostrar(){
    document.getElementById("muestra").innerHTML = numeros
}

function anadir(){
    numeros[numeros.length] = document.getElementById("texto").value;
}

function sumar(){
    let total = numeros.reduce((a, b) => a + b, 0);
    document.getElementById("muestra").innerHTML = total
}
