/*======= ARRAY BASE DE DATOS BOT =========*/

const dialogoBots = [{user: "Hola", bot: "Hola soy Cova"}, {user: "Como te llamas", bot: "Mi nombre es Cova"},{user: "Chau", bot: "Hasta luego amigo."}, {user: "abriendote", bot:"es la unica forma de conocerte.(3:05)"}];

/*======= ANULAR ENVIAR INPUT ========*/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
      if(e.keyCode == 13) {
        e.preventDefault();
      }
    }))
});

/*======= ACTUALIZAR ARRAY ======*/

const subirArray = () => {
    let objArr = {};

    for ( let i = 0; i < localStorage.length; i++) { 
        objArr = localStorage.getItem(localStorage.key(i)); 
        let subirArr = JSON.parse(objArr);
        dialogoBots.push(subirArr);
    } 
}

subirArray();


/*======= HABLAR CON BOT ========*/

let p = document.getElementById("bot");

let hablarBot = document.getElementById("btn");
hablarBot.innerHTML = "Enviar";

hablarBot.onclick = () => {

    chatUser = document.getElementById("hablar").value;

    const hablarBot = () => {

        if(comprobacion = dialogoBots.find((el) => el.user == chatUser)){
            p.innerHTML = comprobacion.bot;
        }else{
            p.innerHTML = `No tengo respuesta! Toca el boton <a href="./enseñar.html"> Enseñar </a>.`;
        }
    }

    hablarBot();
}
