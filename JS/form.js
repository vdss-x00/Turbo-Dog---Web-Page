const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let valido = true;

    document.querySelectorAll(".erro").forEach(el => el.textContent = "");

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    if(nome.value.trim() === ""){
        document.getElementById("erro-nome").textContent = "Informe seu nome.";
        valido = false;
    }

    if(email.value.trim() === ""){
        document.getElementById("erro-email").textContent = "Informe seu e-mail.";
        valido = false;
    }
    else if(!email.value.includes("@")){
        document.getElementById("erro-email").textContent = "E-mail inválido.";
        valido = false;
    }

    if(mensagem.value.trim() === ""){
        document.getElementById("erro-mensagem").textContent = "Digite uma mensagem.";
        valido = false;
    }

    if(valido){
        form.style.display = "none";
        document.getElementById("mensagem-sucesso").style.display = "block";
    }
});

document
    .getElementById("novo-contato")
    .addEventListener("click", () => {

        form.reset();

        form.style.removeProperty("display");

        document
            .getElementById("mensagem-sucesso")
            .style.display = "none";
    });