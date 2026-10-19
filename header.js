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


const header = document.querySelector(".header")
header.innerHTML +=
        `<a href="landingP.html">
            <img src="imgs/logo.webp" alt="Cantinho da Pizza">
        </a> 
        
        <div class="opcsH">

            <a href="landingP.html">
                <p>Início</p>
            </a>
            
            <div class="opcsL"></div>

            <a href="cardapio.html">
                <p>Pedir</p>
            </a>

            <div class="opcsL"></div>

            <button type="button" onclick="verHorarios(this)">
            <p>Horários</p>
            </button>
            </div>`;

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
            
        </div>`