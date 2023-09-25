// Exercício 21: Escreva um programa que determina a estação do ano com base no mês.
// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 34).

function estacaoDoAno(mes) {
  if (mes == 12 || mes < 3){
    console.log("Estamos no Verão")
  } else if(mes > 3 && mes < 6){
    console.log("Estamos no Outono")
  } else if(mes > 6 && mes < 8){
    console.log("Estamos no Inverno")
  } else {
    console.log("Estamos na Primavera")
  }
}
estacaoDoAno(2);
estacaoDoAno(4);
estacaoDoAno(7);
estacaoDoAno(10);
