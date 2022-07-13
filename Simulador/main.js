const profesores = ['Maria', 'Raul', 'Alejandro', 'Sofia'];
const notas = [];
const usuario = prompt("Bienvenido! Diganos su nombre.");
let suma = 0;

function comprobarAcceso(nombre){

    if(profesores.includes(nombre) == true){
        alert('Bienvenido Profesor.')
    }else{
        alert("Denegado, usted no es profesor.")
        window.location.reload();
    }

}

comprobarAcceso(usuario);

function pedirNotas(){
    
    const cantidadNotas = prompt("Indique la cantidad de Notas.");

    do{
        let ingreso = prompt("Ingrese sus notas: ");
        notas.push(ingreso.toUpperCase());
    }while(notas.length != cantidadNotas);

}

pedirNotas();

function sacarPromedio(){
    
    for(let i = 0; i < notas.length; i++){
        
        suma = suma + parseInt(notas[i]);
        
    }

}

sacarPromedio();

alert(suma);