const artyom = new Artyom();

/*======= ARRAY BASE DE DATOS BOT =========*/

const dialogoBots = [{user: "Hola", bot: "Hola soy Cova"}, {user: "Cómo te llamas", bot: "Mi nombre es Cova"},{user: "Chau", bot: "Hasta luego amigo."}, {user: "Abriendote", bot:"es la unica forma de conocerte.(3:05)"}];

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

/*======= VARIABLE PARRAFO =========*/

let p = document.getElementById("bot");

/*======= FUNCION MAYUSCULA PRIMERA LETRA ========*/

const mayuscula = (palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

/*======= INICIAR ARTYOM =======*/

let voz = document.getElementById("voz");

voz.onclick = () => {
    artyom.initialize({
        lang: "es-ES",
        continuous: true,
        listen: true,
        debug: true,
        speed: 1
    });
}

/*======= FUNCION VOZ BOT =======*/

artyom.addCommands([
    {
        indexes:["Desactivar Voz", "quiero enseñar"],
        action: function(i){
            if(i==0){
                artyom.say("Voz Desactivada");
            }
            if(i==1){
                artyom.say("Toca el boton enseñar en la parte superior del menu.")
            }
        }
    }
]);

artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
    if(isFinal){
        let ingresado = recognized;
        let reconoce = dialogoBots.find((el) => el.user == mayuscula(ingresado));
        if(reconoce){
            artyom.say(reconoce.bot);
            p.innerHTML = "";
            artyom.fatality();
        }else{
            artyom.say("No tengo respuesta para esto, enseñame por favor.")
            p.innerHTML = `No tengo respuesta! Toca el boton <a href="./enseñar.html"> Enseñar </a>.`
            artyom.fatality();
        }
    }
});

/*======= FUNCION HABLAR BOT =======*/

const hablarBot = () => {

    /*== Variables ==*/
    let chatUser = document.getElementById("hablar").value;
    let comprobacion = dialogoBots.find((el) => el.user == mayuscula(chatUser));
    const noRes = p.innerHTML = `No tengo respuesta! Toca el boton <a href="./enseñar.html"> Enseñar </a>.`

    /*== OR ==*/
    p.innerHTML = comprobacion.bot || noRes;

}

/*======= BOTON BOT ========*/

let botonBot = document.getElementById("btn");

botonBot.onclick = () => {
    hablarBot();
}