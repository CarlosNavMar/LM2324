var numeros= [1,2,3,4,5]

function mostrar(){
    document.getElementById("muestra").innerHTML = numeros
}

function anadir(){
    var texto = parseFloat(document.getElementById("texto").value);
    numeros.push(texto);
}

function sumar(){
    let total = numeros.reduce((a, b) => a + b, 0);
    document.getElementById("muestra").innerHTML = total
}

function multi(){
    const multi = numeros.reduce((p,c)=>p*c);
    document.getElementById("muestra").innerHTML = multi
}