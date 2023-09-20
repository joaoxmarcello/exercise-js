// Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.
// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 25).

function calculaIMC(peso, altura) {
  const imc = peso / (altura ** 2);
  if (imc < 18.5) {
    console.log("abaixo do peso");
  } else if (18.5 <= imc < 25) {
    console.log("Normal");
  } else if (25 <= imc < 30){
    console.log("Sobrepeso");
  } else {
    console.log("Obesidade");
  }
  console.log(imc);
}

calculaIMC(66, 1.8);
