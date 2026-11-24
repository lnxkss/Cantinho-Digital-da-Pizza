
const pizzas = [
    {
        id: 1,
        sabor: "Calabresa com Requeijão Cremoso",
        ingredientes: "Molho de tomate, mussarela, calabresa, requeijão e orégano"
    },
    {
        id: 2,
        sabor: "Calabresa Especial",
        ingredientes: "Molho de tomate, mussarela, calabresa, cebola, mostarda, ovos cozidos e orégano"
    },
    {
        id: 3,
        sabor: "Cataratas",
        ingredientes: "Molho de tomate, mussarela, cebola roxa, calabresa, bacon, requeijão e orégano"
    },
    {
        id: 4,
        sabor: "Cantinho da Pizza",
        ingredientes: "Molho de tomate, mussarela, frango, calabresa, azeitona, milho verde e orégano"
    },
    {
        id: 5,
        sabor: "Chineizinha",
        ingredientes: "Molho de tomate, mussarela, presunto, bacon, creme de alho e orégano"
    },
    {
        id: 6,
        sabor: "Frango com Cheddar",
        ingredientes: "Molho de tomate, mussarela, cheddar, frango desfiado e orégano"
    },
    {
        id: 7,
        sabor: "Frango",
        ingredientes: "Molho de tomate, mussarela, frango desfiado e orégano"
    },
    {
        id: 8,
        sabor: "Frango com Requeijão Cremoso",
        ingredientes: "Molho de tomate, mussarela, frango, requeijão e orégano"
    },
    {
        id: 9,
        sabor: "Frango com Milho",
        ingredientes: "Molho de tomate, mussarela, frango, milho e orégano"
    },
    {
        id: 10,
        sabor: "Milho ao Creme",
        ingredientes: "Molho de tomate, mussarela, milho, creme de leite e orégano"
    },
    {
        id: 11,
        sabor: "Mista",
        ingredientes: "Molho de tomate, mussarela, milho, palmito, calabresa moída e orégano"
    },
    {
        id: 12,
        sabor: "Moda da Casa",
        ingredientes: "Molho de tomate, mussarela, frango, milho, catupiry, orégano e batata palha"
    },
    {
        id: 13,
        sabor: "Mussarela",
        ingredientes: "Molho de tomate, mussarela, tomate em rodelas e orégano"
    },
    {
        id: 14,
        sabor: "Moda da Lua",
        ingredientes: "Molho de tomate, mussarela, frango, bacon, milho, requeijão e orégano"
    },
    {
        id: 15,
        sabor: "Napolitana",
        ingredientes: "Molho de tomate, mussarela, provolone, tomate e orégano"
    },
    {
        id: 16,
        sabor: "Palmito",
        ingredientes: "Molho de tomate, mussarela, palmito e orégano"
    },
    {
        id: 17,
        sabor: "Paulista",
        ingredientes: "Molho de tomate, mussarela, presunto, milho, azeitona e orégano"
    },
    {
        id: 18,
        sabor: "Pizzaiolo",
        ingredientes: "Molho de tomate, mussarela, tomate, frango, bacon e orégano"
    },
    {
        id: 19,
        sabor: "Portuguesa",
        ingredientes: "Molho de tomate, mussarela, tomate, pimentão, presunto, ovo cozido, cebola e orégano"
    },
    {
        id: 20,
        sabor: "Quatro Queijos",
        ingredientes: "Molho de tomate, mussarela, provolone, parmesão, requeijão cremoso e orégano"
    },
    {
        id: 21,
        sabor: "Cinco Queijos",
        ingredientes: "Molho de tomate, mussarela, provolone, parmesão, requeijão cremoso, cheddar e orégano"
    }
];

let pedidos = [];
let tamanho = null;
let maxSabores = 0;
let saboresSelecionados = [];

const sabores = document.getElementById("sabores");

pizzas.forEach(pizza => {
    sabores.innerHTML += `
        <div class="sabor" id="${pizza.id}">
            <img src="pizza.webp" alt="${pizza.sabor}">
            <div class="saborIngredientes">
                <h3>${pizza.sabor}<br></h3>
                <p>${pizza.ingredientes}</p>
            </div>
        </div>
    `;
});

function trocarClasse(btnOnclick) {
    const btnAntigo = document.querySelector(".btnSelecionado");

    if (btnAntigo) {
        btnAntigo.classList.remove("btnSelecionado");
        btnAntigo.classList.add("btn");
    }

    btnOnclick.classList.add("btnSelecionado");
}

function revelarSabores() {
    const saborDiv = document.getElementById("saborDiv");

    if (tamanho === null) {
        saborDiv.style.display = "none";
    } else {
        saborDiv.style.display = "block";
    }
}

function atualizarSabores() {
    document.querySelectorAll(".sabor").forEach(div => {
        const selecionado = saboresSelecionados.some(sabor => sabor.id === Number(div.id));

        if (saboresSelecionados.length >= maxSabores && !selecionado) {
            div.classList.add("saborBloqueado");
        } else {
            div.classList.remove("saborBloqueado");
        }
    });
}

const pizzasDiv = document.querySelectorAll(".pizza");

pizzasDiv.forEach(div => {
    div.addEventListener("click", function() {

        if (tamanho !== div.id) {
            saboresSelecionados = [];

            document.querySelectorAll(".saborSelecionado").forEach(sabor => {
                sabor.classList.remove("saborSelecionado");
            });
        }

        const pizzaSelecionada = document.querySelector(".pizzaSelecionada");

        if (pizzaSelecionada) {
            pizzaSelecionada.classList.remove("pizzaSelecionada");
            pizzaSelecionada.classList.add("pizza");
        }

        div.classList.remove("pizza");
        div.classList.add("pizzaSelecionada");

        tamanho = div.id;

        if (tamanho === "gigante") {
            maxSabores = 3;
        } else {
            maxSabores = 2;
        }

        revelarSabores();
        atualizarSabores();
    });
});

sabores.addEventListener("click", function(event) {
    const saborSelecionado = event.target.closest(".sabor");

    if (!saborSelecionado) return;

    const sabor = pizzas.find(pizza => pizza.id === Number(saborSelecionado.id));

    const index = saboresSelecionados.findIndex(item => item.id === sabor.id);

    if (index !== -1) {
        saboresSelecionados.splice(index, 1);
        saborSelecionado.classList.remove("saborSelecionado");
    } else {
        if (saboresSelecionados.length >= maxSabores) return;

        saboresSelecionados.push(sabor);
        saborSelecionado.classList.add("saborSelecionado");
    }

    atualizarSabores();
});

function adicionarPedido() {

    if (tamanho === null) {
        alert("Selecione um tamanho!");
        return;
    }

    if (saboresSelecionados.length === 0) {
        alert("Selecione pelo menos um sabor!");
        return;
    }

    pedidos.push({
        tamanho: tamanho,
        sabores: [...saboresSelecionados]
    });

    console.log(pedidos);

    tamanho = null;
    maxSabores = 0;
    saboresSelecionados = [];

    document.querySelectorAll(".pizzaSelecionada").forEach(div => {
        div.classList.remove("pizzaSelecionada");
        div.classList.add("pizza");
    });

    document.querySelectorAll(".saborSelecionado").forEach(div => {
        div.classList.remove("saborSelecionado");
    });

    document.querySelectorAll(".saborBloqueado").forEach(div => {
        div.classList.remove("saborBloqueado");
    });

    revelarSabores();
}

revelarSabores();
