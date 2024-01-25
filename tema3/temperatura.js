function convertir(temperatura){
    let valor = document.getElementById("cantidad").value;
    let resultado = 0;
    if (temperatura=="grado"){    
        resultado = (valor-32)*(5/9);
        document.getElementById("resultado").innerHTML = resultado + ' C';
    }
    
    else{
        resultado = (valor*(9/5))+32;
        document.getElementById("resultado").innerHTML = resultado + ' F';
    }
}