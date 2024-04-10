import {
    potencia,
    maiorValor,
    menorValor,
    raizQuadrada,
  } from '../index.js';

// Teste para a função de potência
it('Calcula a potência corretamente', () => {
    expect(potencia(2, 3)).toBe(8); // 2^3 = 8
  });
  
  // Teste para a função de encontrar o maior valor
  it('Encontra o maior valor corretamente', () => {
    expect(maiorValor(5, 10)).toBe(10);
  });
  
  // Teste para a função de encontrar o menor valor
  it('Encontra o menor valor corretamente', () => {
    expect(menorValor(5, 10)).toBe(5);
  });
  
  // Teste para a função de calcular a raiz quadrada
  it('Calcula a raiz quadrada corretamente', () => {
    expect(raizQuadrada(25)).toBe(5); // sqrt(25) = 5
  });