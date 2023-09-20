// Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final.
// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 24)

function situacao(media) {
  if (media >= 7) {
    console.log("Aprovado");
  } else if (media >=5 && media < 7) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}
situacao(7);
