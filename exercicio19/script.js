// Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo.

// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 32).

function intervalo(intervaloMin, numero, IntervaloMax){
  if (numero >= intervaloMin && numero <= IntervaloMax){
    console.log(numero + " Esta dentro do intervalo")
  }else {
    console.log(numero + " Esta fora do intervalo")
  }
}
intervalo(10, 10, 11); // dentro 
intervalo(10, 9, 11); // fora 
intervalo(2, 10, 15); // dentro 
