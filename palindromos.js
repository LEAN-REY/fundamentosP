function esPalindromo(frase) {
    
  var fraseSinEspacios = frase.toLowerCase().replace(/\s/g, '');
    
    var reverso = fraseSinEspacios.split('').reverse().join('');
    
    if (fraseSinEspacios === reverso) {
      return true;
    } else {
      return false;
    }
  }
  
  var fraseIngresada = prompt('Ingresa una frase:');
  if (esPalindromo(fraseIngresada)) {
    console.log('La frase es un palíndromo.');
  } else {
    console.log('La frase no es un palíndromo.');
  }
  