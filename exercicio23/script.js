// Exercício 23: Escreva um programa que verifica as cores de um semafáro.
// Battisti, Matheus. 200 Exercícios de JavaScript: Fortaleça suas habilidades com desafios: Domine JavaScript com exercícios interativos (Portuguese Edition) (p. 36).

verificaSemafaro((cor) => {
  if (cor === 'verde') {
    console.log(cor ,' Passe');
  } else if (cor === 'amarelo') {
    console.log(cor , 'atenção');
  } else if (cor === 'vermelho'){
    console.log(cor, 'Pare');
  } else {
    console.log(cor , 'Digite uma cor valida');
  }
})
verificaSemafaro('verde');
verificaSemafaro('amarelo');
verificaSemafaro('vermelho');
verificaSemafaro('azul');


