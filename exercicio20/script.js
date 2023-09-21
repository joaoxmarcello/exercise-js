// Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno.

// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 33).

function classifica(nota){
  if (nota >= 9){
    console.log(nota + ", Você tirou um 'A'.");
  } else if (nota < 9 && nota >= 7  ){
    console.log(nota + ", Você tirou um 'B'.");
  } else {
    console.log(nota + ", Você tirou um 'C'.");
  }
}
classifica(6.9); // C
classifica(8); // B
classifica(10); // A
