function insertElement(arr, element, position) {
    if (position < 0 || position > arr.length) {
      console.log("La posición está fuera del rango del arreglo.");
      return arr;
    }
  
    arr.splice(position, 0, element);
    return arr;
  }
  
  // Ejemplo de uso
  var arreglo = [1, 2, 3, 4, 5];
  var nuevoElemento = 10;
  var posicion = 2;
  
  var arregloModificado = insertElement(arreglo, nuevoElemento, posicion);
  console.log(arregloModificado);
  