
const opcoesPagamento = document.querySelectorAll(
    'input[name="pagamento"]'
);

opcoesPagamento.forEach(function (opcao) {
    opcao.addEventListener("change", function () {

        document.querySelectorAll(".grupo-pagamento").forEach(function (grupo) {
            grupo.classList.remove("ativo");
        });

        const grupo = opcao.closest(".grupo-pagamento");

        grupo.classList.add("ativo");
    });
});

function confirmarPagamento(tipo) {
    alert("Pagamento em " + tipo + " selecionado!");
}

function revisarPedido() {
    const selecionado = document.querySelector(
        'input[name="pagamento"]:checked'
    );

    if (!selecionado) {
        alert("Selecione uma forma de pagamento!");
        return;
    }

    alert("Forma de pagamento: " + selecionado.value);
}
