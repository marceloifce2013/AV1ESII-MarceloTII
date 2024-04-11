//Avaliação ESII

// Função para calcular potência
function potencia(base, expoente) {
    return Math.pow(base, expoente);
}

// Função para encontrar o maior valor
function maiorValor(a, b) {
    return Math.max(a, b);
}

// Função para encontrar o menor valor
function menorValor(a, b) {
    return Math.min(a, b);
}

// Função para calcular a raiz quadrada
function raizQuadrada(numero) {
    return Math.sqrt(numero);
}

module.exports = {
    potencia,
    maiorValor,
    menorValor,
    raizQuadrada
};
