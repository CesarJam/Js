class Gato {
    constructor(nombre, edad, color, raza, hambriento, energia) {
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.raza = raza;
        this.hambriento = hambriento;
        this.energia = energia;
    }

    maullar() {
        return `El gato ${this.nombre} está maullando.`;
    }

    comer(comida) {
        console.log(`El gato ${this.nombre} está comiendo ${comida}.`);
    }
}

// Crear una instancia de la clase Gato
const miGato = new Gato("Pelusa", 3, "Gris", "Persa", true, 80);

// Ejemplos de uso
console.log(miGato.maullar());
miGato.comer("pescado");
document.write(gatoUno.nombre);
export default Gato;