var pelicula = ["Django", "Star Wars", "Pulp Fiction", "El feo, el bueno y el malo"]

function mostrar(){
    document.getElementById("muestra").innerHTML = pelicula
}

function anadir(){
    pelicula[pelicula.length] = document.getElementById("texto").value;
}

function quitar(){
    document.getElementById("texto").innerHTML = pelicula.pop();
}

function ordenar(){
    document.getElementById("muestra").innerHTML = pelicula.sort();
}

function ordenardelreves(){
    pelicula.sort();
    document.getElementById("muestra").innerHTML = pelicula.reverse();
}

function buscar(){
    cosa = document.getElementById("texto").value;
    let position = pelicula.lastIndexOf(cosa) + 1;
    if (position<=0){
        document.getElementById("muestra").innerHTML = cosa + " no encontrado"
    }    
    else { 
        document.getElementById("muestra").innerHTML = cosa+ "esta en la posición" + position;
    }    
}