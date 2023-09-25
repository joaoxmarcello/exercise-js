// Exercício 22: Escreva um programa que determina o número de dias em um mês.
// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 35).

 function determinaDias(mes){
   switch(mes){
    case 2: 
      console.log("28 dias, ou 29 dias em anos Bissextos.")
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 dias");
      break;
    default:
      console.log("31 dias");
  }
}
determinaDias(2);
determinaDias(6);
determinaDias(12);
// Qual seria o melhor?
function determinaDias(mes){
  if (mes == 2){
    console.log("28 dias, ou 29 dias em anos Bissextos.")
  } else if(mes == 4 || mes == 6 || mes == 9 || mes  == 11){
    console.log("30 dias")
  } else {
    console.log("31 dias")
  }
}
determinaDias(2);
determinaDias(6);
determinaDias(12);



