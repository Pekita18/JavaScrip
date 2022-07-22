/*======= ARRAY BASE DE DATOS BOT =========*/

const dialogoBots = [{user: "Hola", bot: "Hola soy Cova"}, {user: "Como te llamas", bot: "Mi nombre es Cova"},{user: "Chau", bot: "Hasta luego amigo."}];

/*======= FUNCION ENSEÑAR BOT =========*/

function enseñarBot(){
    let user = dialogoBots.push({user: prompt("Ingrese su texto") , 
    bot: prompt("Ingrese la respuesta del Bot.")});
}

/*======== FUNCION HABLAR BOT =========*/

function hablarBot(){
    const primerMensaje = prompt("Escribele a Cova.");

    const respuestaBot = dialogoBots.find(dialogoBot => dialogoBot.user === primerMensaje);

    if(typeof respuestaBot === 'undefined'){
        alert("No tengo respuesta para este mensaje. Enseñame!");
        enseñarBot();
    }else{
        alert(respuestaBot.bot);
    }
}

/*======= CONTADOR DE CHATS ==========*/

for(let i = 0; i <= 11; i++){
    hablarBot();
}

alert("Te quedaste sin burbujas, vuelve mañana y sigue hablando con Cova!")

