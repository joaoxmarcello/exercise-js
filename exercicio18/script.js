// Exercício 18: Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.
// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 31).

function poderDirigir(idade){
  if (idade >= 18){
    console.log("Você pode tirar a carteira de habilitação e dirigir");
  } else {
    console.log("Você não pode dirigir");
  }
}
poderDirigir(18);
poderDirigir(17);
poderDirigir(25);
