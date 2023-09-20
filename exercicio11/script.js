// Exercício 11: Escreva um programa que verifica se uma pessoa pode votar com base na idade.
// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 23).

function votar(idade) {
  if (idade >= 18 && idade <= 70) {
    console.log("O voto é obrigatório")
  }else if (idade >= 16 || idade == 17 || idade > 70) {
    console.log("O voto é facultativo")
  } else {
    console.log("Você não pode votar")
  }
}

votar(15);