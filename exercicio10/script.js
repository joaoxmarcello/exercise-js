// Exercício 10: Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).

// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 22).

function calculaMedia(nota1, nota2) {
  calculaMedia = (nota1 + nota2) / 2;
  if (calculaMedia >= 7) {
    console.log("Aprovado")
  } else if (calculaMedia < 7) {
    console.log("Reprovado")
  }
}
calculaMedia(10, 4);
