// Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 21).

function verificaNumero(recebeNumero) {

  if (recebeNumero === 0) {
    console.log("Zero")
  } else if (recebeNumero >= 0) {
    console.log("Positivo")
  } else {
    console.log("Negativo")
  }
}
verificaNumero(1);
verificaNumero(-3);
verificaNumero(0);