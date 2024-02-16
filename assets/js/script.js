function encrypt() {
    let textarea = document.querySelector("textarea");
    let text = textarea.value.toLowerCase();
    let encryptedText = "";
    
    if(textarea.value == ""){
        alert("Digite o texto")
        return;
    }

    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "e":
                encryptedText += "enter";
                break;
            case "i":
                encryptedText += "imes";
                break;

            case "a":
                encryptedText += "ai";
                break;

            case "o":
                encryptedText += "ober";
                break;

            case "u":
                encryptedText += "ufat";
                break;

            default:
                encryptedText += text[i];
                break;
        }
    }
    viewResponse(encryptedText);
}

function decrypt() {
    let textarea = document.querySelector("textarea");
    let encryptedText = textarea.value.toLowerCase();
    let decryptedText = "";
    
    if(textarea.value == ""){
        alert("Digite o texto")
        return;
    }

    decryptedText = encryptedText.replace(/enter/g, "e");
    decryptedText = decryptedText.replace(/imes/g, "i");
    decryptedText = decryptedText.replace(/ai/g, "a");
    decryptedText = decryptedText.replace(/ober/g, "o");
    decryptedText = decryptedText.replace(/ufat/g, "u");

    viewResponse(decryptedText);
}

function viewResponse(text) {
    let response = document.querySelector(".response-none");

    response.classList.add("response");

    response.innerHTML = "";
    response.innerHTML += `
                <p id="text-result">${text}</p>
                  <button class="secondary-button" id="copy" onclick='copyText()'>Copiar</button>
    `;
}

function copyText() {
    let text = document.getElementById("text-result").innerText;
    let inputTemptime = document.createElement("input");

    document.body.appendChild(inputTemptime);
    inputTemptime.setAttribute("value", text);
    inputTemptime.select();

    document.execCommand("copy");
    document.body.removeChild(inputTemptime);

    alert("Texto copiado: " + text);
}
