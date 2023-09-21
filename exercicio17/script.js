// Exercício 17: Escreva um programa que determina se um número é par ou ímpar.
// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 30).

function imparPar (numero){
  if(numero % 2 ===0){
    console.log("Par");
  } else {
    console.log("Ímpar");
  }
}
imparPar(2);
imparPar(1);
imparPar(5);
imparPar(6);
