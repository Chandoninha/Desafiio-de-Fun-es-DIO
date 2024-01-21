function calcularRank(vitorias, derrotas) {
    let saldoRankeadas = vitorias - derrotas;
    let ranking;

    if (saldoRankeadas < 10) {
        ranking = "Ferro";
    } else if (saldoRankeadas >= 11 && saldoRankeadas <= 20) {
        ranking = "Bronze";
    } else if (saldoRankeadas >= 21 && saldoRankeadas <= 50) {
        ranking = "Prata";
    } else if (saldoRankeadas >= 51 && saldoRankeadas <= 80) {
        ranking = "Ouro";
    } else if (saldoRankeadas >= 81 && saldoRankeadas <= 90) {
        ranking = "Diamante";
    } else if (saldoRankeadas >= 91 && saldoRankeadas <= 100) {
        ranking = "Lendário";
    } else {
        ranking = "Imortal";
    }

    return{
        saldoRankeadas : saldoRankeadas,
        ranking : ranking
    }
};

let resultado = calcularRank(187, 60);

console.log(`O herói tem ${resultado.saldoRankeadas} de saldo e está no ranking ${resultado.ranking}.`);

