// Importar la clase Gato
import Gato from './gato.js';

// Crear una instancia de la clase Gato
var gatoUno = new Gato('Garfield', 18, 'verde', 'Montes', 'si', 100);

// Recuperar y mostrar el nombre del gato en el DOM
document.write(gatoUno.nombre);
console.log(gatoUno.nombre);