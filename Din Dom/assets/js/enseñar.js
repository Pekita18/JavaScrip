/*======= ENSEÑAR BOT ========*/

let p = document.getElementById("bot");

let hablarBot = document.getElementById("btn");
hablarBot.innerHTML = "Enviar";

hablarBot.onclick = () => {

    chatUser = document.getElementById("hablar").value;
    chatBot = document.getElementById("enseñar").value;

    const subirLocal = () => {
        const objLocal = {user: chatUser, bot: chatBot};
        const subirLocal = JSON.stringify(objLocal);
        localStorage.setItem(chatUser, subirLocal);        
    }

    const enseñarBot = () => {
        p.innerHTML = `Ya lo aprendi, pruebalo en la <a href="./cova.html"> Pagina de Cova </a>!!`;
        document.getElementById("hablar").value = "";
        document.getElementById("enseñar").value = "";
        subirLocal();
    }

    enseñarBot();
}