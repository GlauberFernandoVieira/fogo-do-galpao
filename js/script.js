function mostrar() {
    const info = document.getElementById("informacao");
    const botao = document.getElementById("botaoPromocao");

    const promocaoAberta = info.classList.contains("ativo");

    if (promocaoAberta) {
        info.classList.remove("ativo");
        info.style.display = "none";
        botao.textContent = "Ver Promoção do Dia";
        return;
    }

    info.classList.add("ativo");
    info.style.display = "block";

    info.innerHTML = `
        <strong>PROMOÇÃO DO DIA</strong><br><br>
        Rodízio Completo + Refrigerante<br>
        por apenas <strong>R$ 79,90</strong>.
    `;

    botao.textContent = "Fechar Promoção";

    info.style.background = "#fff";
    info.style.borderLeft = "6px solid #8b0000";
    info.style.transform = "scale(1.03)";

    setTimeout(() => {
        info.style.transform = "scale(1)";
    }, 300);
}

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach((card) => {
    observer.observe(card);
});

function mostrarContato(tipo) {
    const contato = document.getElementById("infoContato");

    if (tipo === "local") {
        contato.innerHTML = `
            <strong>Escolha uma unidade:</strong><br><br>

            <a href="https://www.google.com/maps/search/?api=1&query=Fogo%20do%20Galp%C3%A3o%20Taguatinga"
               target="_blank"
               rel="noopener noreferrer">
               Unidade Taguatinga
            </a>

            <br><br>

            <a href="https://maps.app.goo.gl/qYPBL8PQTpEqyCys7"
               target="_blank"
               rel="noopener noreferrer">
               Unidade Ceilândia
            </a>
        `;
    }

    if (tipo === "telefone") {
        contato.innerHTML = `
            <a href="tel:+5561999999999">
                (61) 99999-9999
            </a>
        `;
    }

    if (tipo === "email") {
        contato.innerHTML = `
            <a href="mailto:contato@fogodogalpao.com">
                contato@fogodogalpao.com
            </a>
        `;
    }
}

function mostrarReserva() {
    const form = document.getElementById("formReserva");
    const formAberto = form.classList.contains("ativo");

    if (formAberto) {
        form.classList.remove("ativo");
        form.style.display = "none";
        return;
    }

    form.classList.add("ativo");
    form.style.display = "flex";
}

const formReserva = document.getElementById("formReserva");

formReserva.addEventListener("submit", (evento) => {
    evento.preventDefault();

    alert("Reserva solicitada com sucesso! Aguarde a confirmação por e-mail.");

    formReserva.reset();
    formReserva.classList.remove("ativo");
    formReserva.style.display = "none";
});

const imagensTopo = [
    "img/fogo-galpao.png",
    "img/banner1.png",
    "img/banner2.png",
];

let imagemAtual = 0;

function trocarImagemTopo() {
    imagemAtual++;

    if (imagemAtual >= imagensTopo.length) {
        imagemAtual = 0;
    }

    const topo = document.querySelector(".topo");

    topo.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("${imagensTopo[imagemAtual]}")`;
}

setInterval(trocarImagemTopo, 5000);