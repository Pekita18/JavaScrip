/*======= DECLARAMOS ARTUOM ========*/

const artyom = new Artyom();

/*======= ARRAY BASE DE DATOS BOT =========*/

const dialogoBots = [{user: "Hola", bot: "Hola soy Cova"}, {user: "Cómo te llamas", bot: "Mi nombre es Cova"},{user: "Chau", bot: "Hasta luego amigo."}, {user: "Abriendote", bot:"es la unica forma de conocerte.(3:05)"}];

const pokemons = [{tipo: "normal"}, {tipo: "fighting"}, {tipo: "flying"}, {tipo: "poison"}, {tipo: "ground"}, {tipo: "rock"}, {tipo: "bug"}, {tipo: "ghost"}, {tipo: "steel"}, {tipo: "fire"}, {tipo: "water"}, {tipo: "grass"}, {tipo: "electric"}, {tipo: "psychic"}, {tipo: "ice"}, {tipo: "dragon"}, {tipo: "dark"}, {tipo: "fairy"}, ]

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

/*====== API POKEMON =======*/

const tipo_pokemon = (tipo) => {
    let bd_type = `https://pokeapi.co/api/v2/type/${tipo}`;
    fetch(bd_type)
    .then(resp => resp.json())
    .then(data => {
        let aleatorio = Math.floor(Math.random() * (data.pokemon.length));
        pokemon = data.pokemon[aleatorio].pokemon.name;
        tipo_pok = data.name;
        coin.insertAdjacentHTML('beforeend', `<p id="bot">${pokemon} es un pokemon de tipo ${tipo_pok}</p>`);
    })
}

/*======= VARIABLES GLOBALES =========*/

let chat= document.getElementById("hablar");
let coin = document.getElementById("chat");
let botonBot = document.getElementById("btn");
let voz = document.getElementById("voz");
let ul = document.getElementById("pokemons");

/*======= FUNCIONES Y EVENTOS GLOBALES ========*/

const mayuscula = (palabra) => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

chat.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      botonBot.onclick();
    }
});

const scroll = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
}

const noRes = () => {
    coin.insertAdjacentHTML('beforeend', `<p id="bot">No tengo respuesta! Toca el boton <a href="./enseñar.html"> Enseñar </a>.</p>`);
}

/*======= IMPRIMIR POKEMONS ==========*/

const printPoke = pokemons.map((poke) => {
    return `<li> ${poke.tipo} </li>`
}).flat().join('');

ul.innerHTML = printPoke;

/*======= INICIAR ARTYOM =======*/

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
        let ingresado = quitarAcentos(recognized);
        coin.insertAdjacentHTML('beforeend', `<p id="user">${ingresado}</p>`);
        let reconoce = dialogoBots.find((el) => el.user == mayuscula(ingresado));
        if(reconoce){
            artyom.say(reconoce.bot);
            coin.insertAdjacentHTML('beforeend', `<p id="bot">${reconoce.bot}</p>`);
            artyom.fatality();
        }else{
            artyom.say("No tengo respuesta para esto, enseñame por favor.")
            noRes();
            artyom.fatality();
        }
        scroll("chat");
    }
});

/*======= FUNCION HABLAR BOT =======*/

const hablarBot = () => {

    /*== Variables ==*/
    let chatUser = chat.value;
    coin.insertAdjacentHTML('beforeend', `<p id="user">${chatUser}</p>`);
    let comprobacion = dialogoBots.find((el) => el.user == mayuscula(chatUser));
    let comprobacionPoke = pokemons.find((el) => el.tipo == chatUser    );  

    tipo_pokemon(chatUser);

    if(comprobacion == undefined && comprobacionPoke == undefined){
        scroll("chat");
        setTimeout(function(){
            noRes();
        }, 500);
    }else{
        setTimeout(function(){
            coin.insertAdjacentHTML('beforeend', `<p id="bot">${comprobacion.bot}</p>`);
        }, 500);
    }
    
    setTimeout(function(){
        scroll("chat");
    }, 500);  
    
    chat.value = "";

}

/*======= BOTON BOT ========*/

botonBot.onclick = () => {
    hablarBot();
}