let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let divResultado = document.getElementsByClassName("resultado")[0];
let carnePorPessoa;
let cervejaPorPessoa;
let bebidasPorPessoa;

function calcularQuantidade() {
    let qtdAdultos = inputAdultos.value;
    let qtdCriancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    if (duracao >= 6) {
        carnePorPessoa = 650;
        cervejaPorPessoa = 2000;
        bebidasPorPessoa = 1500;
    } else {
        carnePorPessoa = 400;
        cervejaPorPessoa = 1200;
        bebidasPorPessoa = 1000;
    }

    let qtdTotalCarne = (carnePorPessoa * qtdAdultos) + (carnePorPessoa / 2 * qtdCriancas);
    let qtdTotalCerveja = cervejaPorPessoa * qtdAdultos;
    let qtdTotalBebidas = (bebidasPorPessoa * qtdAdultos) + (bebidasPorPessoa / 2 * qtdCriancas);

    divResultado.innerHTML = `<p>${qtdTotalCarne / 1000}Kg de carne</p>`;
    divResultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de cerveja</p>`;
    divResultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} garrafas (2L) de bebidas<p/>`;

}