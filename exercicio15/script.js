function verifica(palavra){
  let inverso = palavra.split('').reverse().join('');
  if (palavra == inverso) {
    console.log(palavra + " Palindromo")
  } else {
    console.log(palavra + " Não é Palindromo")
  }
}
verifica("ana");
verifica("arara");
