// Exercício 16: Escreva um programa que determina o maior entre três números.
// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 29).

function maiorNumero(num1,num2,num3){
  if (num1 > num2 && num1 > num3){
    console.log(num1 + " É o maior número")
  } else if(num2 > num1 && num2 > num3){
    console.log(num2 + " É o maior número")
  } else {
    console.log(num3 + " É o maior número")
  }
}
maiorNumero(1, 2 , 3)
maiorNumero(3, 2 , 1)
maiorNumero(7, 8 , 12)
