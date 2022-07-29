/*======= ARRAY BASE DE DATOS BOT =========*/

const dialogoBots = [{user: "Hola", bot: "Hola :)"}, {user: "Como te llamas", bot: "Mi nombre es Cova"},{user: "Chau", bot: "Hasta luego amigo."}, {user: "hola putoo" , bot:"putoo"}];

/*======= FUNCION ENSEÑAR BOT =========*/

function enseñarBot(){
    let p = document.getElementById("bot");
    p.innerHTML = "<h3>Escribre la pregunta que quieres que aprenda el bot</h3>"
    let user = dialogoBots.push({user: document.getElementById("usuario").value});
    p.innerHTML = "<h3>Escribe lo que quieras que responda el Bot</h3>";
    let bot = dialogoBots.push({bot: document.getElementById("usuario").value});
}

/*======== FUNCION HABLAR BOT =========*/

function hablarBot(){
    const primerMensaje = document.getElementById("usuario").value;

    const respuestaBot = dialogoBots.find(dialogoBot => dialogoBot.user === primerMensaje);

    if(typeof respuestaBot === 'undefined'){
        let p = document.getElementById("bot");
        p.innerHTML = "<h3>No tengo respuesta para esto, enseñame!</h3>";
        enseñarBot();
    }else{
        let p = document.getElementById("bot");
        p.innerHTML = `<h3> ${respuestaBot.bot} </h3>`;
    }
}

/*======= CONTADOR DE CHATS ==========*/

for(let i = 0; i <=20; i++){
    hablarBot();
}