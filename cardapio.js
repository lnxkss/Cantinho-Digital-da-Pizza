const pizzas = [
  {
    sabor: "Calabresa com Requeijão Cremoso",
    ingredientes: "Molho de tomate, mussarela, calabresa, requeijão e orégano"
  },
  {
    sabor: "Calabresa Especial",
    ingredientes: "Molho de tomate, mussarela, calabresa, cebola, mostarda, ovos cozidos e orégano"
  },
  {
    sabor: "Cataratas",
    ingredientes: "Molho de tomate, mussarela, cebola roxa, calabresa, bacon, requeijão e orégano"
  },
  {
    sabor: "Cantinho da Pizza",
    ingredientes: "Molho de tomate, mussarela, frango, calabresa, azeitona, milho verde e orégano"
  },
  {
    sabor: "Chineizinha",
    ingredientes: "Molho de tomate, mussarela, presunto, bacon, creme de alho e orégano"
  },
  {
    sabor: "Frango com Cheddar",
    ingredientes: "Molho de tomate, mussarela, cheddar, frango desfiado e orégano"
  },
  {
    sabor: "Frango",
    ingredientes: "Molho de tomate, mussarela, frango desfiado e orégano"
  },
  {
    sabor: "Frango com Requeijão Cremoso",
    ingredientes: "Molho de tomate, mussarela, frango, requeijão e orégano"
  },
  {
    sabor: "Frango com Milho",
    ingredientes: "Molho de tomate, mussarela, frango, milho e orégano"
  },
  {
    sabor: "Milho ao Creme",
    ingredientes: "Molho de tomate, mussarela, milho, creme de leite e orégano"
  },
  {
    sabor: "Mista",
    ingredientes: "Molho de tomate, mussarela, milho, palmito, calabresa moída e orégano"
  },
  {
    sabor: "Moda da Casa",
    ingredientes: "Molho de tomate, mussarela, frango, milho, catupiry, orégano e batata palha"
  },
  {
    sabor: "Mussarela",
    ingredientes: "Molho de tomate, mussarela, tomate em rodelas e orégano"
  },
  {
    sabor: "Moda do Lia", 
    ingredientes: "Molho de tomate, mussarela, frango, bacon, milho, requeijão e orégano"
  },
  {
    sabor: "Napolitana",
    ingredientes: "Molho de tomate, mussarela, provolone, tomate e orégano"
  },
  {
    sabor: "Palmito",
    ingredientes: "Molho de tomate, mussarela, palmito e orégano"
  },
  {
    sabor: "Paulista",
    ingredientes: "Molho de tomate, mussarela, presunto, milho, azeitona e orégano"
  },
  {
    sabor: "Pizzaiolo",
    ingredientes: "Molho de tomate, mussarela, tomate, frango, bacon e orégano"
  },
  {
    sabor: "Portuguesa",
    ingredientes: "Molho de tomate, mussarela, tomate, pimentão, presunto, ovo cozido, cebola e orégano"
  },
  {
    sabor: "Quatro Queijos",
    ingredientes: "Molho de tomate, mussarela, provolone, parmesão, requeijão cremoso e orégano"
  },
  {
    sabor: "Cinco Queijos",
    ingredientes: "Molho de tomate, mussarela, provolone, parmesão, requeijão cremoso, cheddar e orégano"
  }
];

const sabores = document.getElementById("sabores")
pizzas.forEach (pizza => { sabores.innerHTML += `
    <div class="sabor">
        <img src="pizza.jpg" alt="${pizza.sabor}">
        <div class="saborIngredientes">
        <h3>${pizza.sabor}<br></h3>
        <p>${pizza.ingredientes}</p>
        </div>
    </div>    
    `})

    function trocarClasse(btnOnclick) {
    const btnAntigo = document.querySelector(".btnSelecionado");
    if (btnAntigo) {
        btnAntigo.classList.remove("btnSelecionado");
    }
    btnOnclick.classList.add("btnSelecionado");
}