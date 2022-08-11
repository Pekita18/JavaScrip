/*======= FUNCION SUBIR LOCAL ========*/

const subirLocal = () => {
    /*== Variables ==*/
    chatUser = document.getElementById("hablar").value;
    chatBot = document.getElementById("enseñar").value;
    const objLocal = {user: chatUser, bot: chatBot};
    const subirLocal = JSON.stringify(objLocal);

    /*== Storage Local==*/
    localStorage.setItem(chatUser, subirLocal);        
}

/*======= FUNCION ENSEÑAR BOT ========*/

const enseñarBot = () => {
    let p = document.getElementById("bot");
    p.innerHTML = `Ya lo aprendi, pruebalo en la <a href="./cova.html"> Pagina de Cova </a>!!`;
    document.getElementById("hablar").value = "";
    document.getElementById("enseñar").value = "";
    subirLocal();
}

/*======= BOTON ENSEÑAR BOT ========*/

let botonBot = document.getElementById("btn");

botonBot.onclick = () => {
    subirLocal()
    enseñarBot();
}