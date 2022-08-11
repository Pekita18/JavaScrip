/*======= ARRAY BASE DE DATOS BOT =========*/

const dialogoBots = [{user: "Hola", bot: "Hola soy Cova"}, {user: "Como te llamas", bot: "Mi nombre es Cova"},{user: "Chau", bot: "Hasta luego amigo."}, {user: "abriendote", bot:"es la unica forma de conocerte.(3:05)"}];

/*======= ANULAR ENVIAR INPUT ========*/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
        /*== AND ==*/
        e.keyCode == 13 && e.preventDefault();
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

/*======= FUNCION HABLAR BOT =======*/

const hablarBot = () => {

    /*== Variables ==*/
    let chatUser = document.getElementById("hablar").value;
    let p = document.getElementById("bot");
    let comprobacion = dialogoBots.find((el) => el.user == chatUser);
    const noRes = p.innerHTML = `No tengo respuesta! Toca el boton <a href="./enseñar.html"> Enseñar </a>.`

    /*== OR ==*/
    p.innerHTML = comprobacion.bot || noRes;

}

/*======= BOTON BOT ========*/

let botonBot = document.getElementById("btn");

botonBot.onclick = () => {
    hablarBot();
}