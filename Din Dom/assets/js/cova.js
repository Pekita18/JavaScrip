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

/*======= HABLAR CON BOT ========*/

let p = document.getElementById("bot");

let hablarBot = document.getElementById("btn");
hablarBot.innerHTML = "Enviar";

hablarBot.onclick = () => {

    chatUser = document.getElementById("hablar").value;

    const enseñarBot = () => {
        p.innerHTML = "Ya lo aprendi, pruebalo!";
        document.getElementById("hablar").value = "";
        dialogoBots.push({user: chatUser, bot: prompt("Ingrese la respuesta del Bot.")});
    }

    const hablarBot = () => {

        if(comprobacion = dialogoBots.find((el) => el.user == chatUser)){
            p.innerHTML = comprobacion.bot;
        }else{
            enseñarBot();
        }
    }

    hablarBot();
}