
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

function abrirConfirmacao() {
    const modal = document.getElementById("modalConfirmacao");

    modal.style.display = "flex";
}

function fecharConfirmacao() {
    const modal = document.getElementById("modalConfirmacao");

    modal.style.display = "none";
}

document.getElementById("modalConfirmacao").addEventListener("click", function(event) {

    if (event.target === this) {
        fecharConfirmacao();
    }

});