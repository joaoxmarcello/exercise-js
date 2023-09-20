// Exercício 14: Escreva um programa que verifica se um ano é bissexto.

// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 27).

function anoBissexto(ano) {
  if ((ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0 )){
    console.log("Este ano é bissexto!");
  } else {
    console.log("Este ano não é bissexto!");
  }
}
anoBissexto(2000);
anoBissexto(2001);
anoBissexto(2100);
