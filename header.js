function verHorarios(btnOnclick) {
    const horario = document.querySelector(".horariosD");
    const fundoP = document.querySelector(".fundoHorarios");
    horario.classList.add("horariosE");
    fundoP.style.opacity = '0.5';
    fundoP.style.height = '100vh'
    fundoP.style.width = '100%'
}

function fecharHorarios(btnOnclick) {
    const horario = document.querySelector(".horariosE");
    const fundoP = document.querySelector(".fundoHorarios");
    horario.classList.remove("horariosE")
    horario.classList.add("horariosD");
    fundoP.style.opacity = '0';
    fundoP.style.height = '0'
    fundoP.style.width = '0'
}


const header = document.querySelector(".header");

header.innerHTML += `
    <nav class="opcsH">

        <a href="landingP.html">
            <p id="inicio">Início</p>
        </a>

        <a href="cardapio.html">
            <p id="cardapio">Cardápio</p>
        </a>
    </nav>

    <a href="landingP.html">
        <img src="imgs/logo.webp" alt="Cantinho da Pizza">
    </a>

    <nav class="opcsH">
        <button type="button" onclick="verHorarios(this)">
            <p>Horários</p>
        </button>

        <button type="button" onclick="abrirEndereco()">
            <p>Endereço</p>
        </button>
    </nav>
`;

if (window.location.pathname == "/cardapio.html") {
    const headerP = header.querySelector("#cardapio")
    headerP.classList.add("headerSelecionado")
}

if (window.location.pathname == "/landingP.html") {
    const headerP = header.querySelector("#inicio")
    headerP.classList.add("headerSelecionado")
}

const horarioH = document.querySelector(".horariosD")
horarioH.innerHTML += `<div class="tituloH">
            <p>Horários</p>
        </div>

        <div class="info">
            <div class="dias">
            <p><strong>Segunda-feira:</strong> 19:00 às 23:15</p>
            <p><strong>Terça-feira:</strong> 19:00 às 23:15</p>
            <p><strong>Quarta-feira:</strong> 19:00 às 23:15</p>
            <p><strong>Quinta-feira:</strong> 19:00 às 23:15</p>
            <p><strong>Sexta-feira:</strong> 19:00 às 23:15</p>
            <p><strong>Sábado:</strong> 19:00 às 23:40</p>
            <p><strong>Domingo:</strong> 19:00 às 23:15</p>
            </div>
            <div class="relogio">
                <img src="imgs/horario.webp" alt="">
            </div>
        </div>
        <div class="footerH">
            <img src="imgs/footerHorario.webp" alt="">
            
        </div>`;


document.body.insertAdjacentHTML("beforeend", `
    <div class="fundoEndereco" id="fundoEndereco">

        <div class="modalEndereco">

            <div class="tituloEndereco">
                <h2>ENDEREÇO DE ENTREGA</h2>

                <button type="button" onclick="fecharEndereco()">
                    &times;
                </button>
            </div>

            <form id="formEndereco">

                <div class="camposEndereco">

                    <div class="campoEndereco">
                        <label for="cep">CEP</label>
                        <input type="text" id="cep"
                            placeholder="00000-000"
                            maxlength="9" required>
                    </div>

                    <div class="campoEndereco">
                        <label for="telefone">Telefone</label>
                        <input type="tel" id="telefone"
                            placeholder="(00) 00000-0000"
                            maxlength="15" required>
                    </div>
                    
                    <div class="campoEndereco">
                        <label for="rua">Rua / Avenida</label>
                        <input type="text" id="rua"
                            placeholder="Nome da rua" required>
                    </div>

                    <div class="campoEndereco">
                        <label for="numero">Número</label>
                        <input type="text" id="numero"
                            placeholder="Número da residência" required>
                    </div>

                    <div class="campoEndereco">
                        <label for="bairro">Bairro</label>
                        <input type="text" id="bairro"
                            placeholder="Seu bairro" required>
                    </div>

                    <div class="campoEndereco">
                        <label for="complemento">Complemento</label>
                        <input type="text" id="complemento"
                            placeholder="Apartamento, casa...">
                    </div>

                </div>

                <button type="submit" class="confirmarEndereco">
                    CONFIRMAR ENDEREÇO
                </button>

            </form>

        </div>

    </div>
`);

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function() {

    let numero = telefone.value.replace(/\D/g, "");

    numero = numero.substring(0, 11);

    if (numero.length > 2) {
        numero = numero.replace(/^(\d{2})(\d)/, "($1) $2");
    }

    if (numero.length > 10) {
        numero = numero.replace(/(\d{5})(\d{4})$/, "$1-$2");
    } 
    else if (numero.length > 9) {
        numero = numero.replace(/(\d{4})(\d{4})$/, "$1-$2");
    }

    telefone.value = numero;

});

const cep = document.getElementById("cep");

cep.addEventListener("input", function() {

    let numero = cep.value.replace(/\D/g, "");

    numero = numero.substring(0, 8);

    if (numero.length > 5) {
        numero = numero.replace(/^(\d{5})(\d)/, "$1-$2");
    }

    cep.value = numero;

});

const numero = document.getElementById("numero");

numero.addEventListener("input", function() {
    numero.value = numero.value.replace(/\D/g, "");
});

function abrirEndereco() {
    const modal = document.getElementById("fundoEndereco");

    modal.style.display = "flex";
}

function fecharEndereco() {
    const modal = document.getElementById("fundoEndereco");

    modal.style.display = "none";
}

document.getElementById("fundoEndereco").addEventListener("click", function(event) {

    if (event.target === this) {
        fecharEndereco();
    }

});