const seletor = document.querySelector(".seletor-tema");

seletor.addEventListener("change", () => {
    const tema = seletor.value;
    aplicarTema(tema);
});

function aplicarTema(tema) {
    document.body.className = tema;
}

