function enviaMsg(msg) {
    const nDiv = document.createElement("div");
    const nMsg = document.createElement("p");
    const nLabel = document.createElement("label");

    nLabel.innerText = "Você diz:";
    nMsg.className = "mensagem";
    nMsg.innerText = msg;

    const chatYou = document.querySelector("#vc");

    nDiv.appendChild(document.createElement("br"));
    nDiv.appendChild(nLabel);
    nDiv.appendChild(document.createElement("br"));
    nDiv.appendChild(nMsg);
    chatYou.appendChild(nDiv);
}

const add= document.getElementById("Add");
add.addEventListener("submit", function (event) {
    event.preventDefault();

    const msgInput = document.getElementById("msg");

    if (msgInput.value) {
        enviaMsg(msgInput.value);
    }

    msgInput.value = "";
    msgInput.focus();

});
