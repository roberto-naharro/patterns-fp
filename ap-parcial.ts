const imprime = (saludo: string, nombre: string) => console.log(saludo, nombre);
imprime(`Hola, mi nombre es`, "Juan");

const imprimeCurried = (saludo: string) => (nombre: string) =>
  console.log(saludo, nombre);
imprimeCurried(`Hola, mi nombre es`)("Juan");

// saludaHola es una función parcialmente aplicada que podemos usar en cualquier sitio
const saludaHola = imprimeCurried(`Hola, mi nombre es`);
//NOTA: también podemos hacer una inversión de parámetros si queremos aplicar parcialmente el saludo
const saludaAntonio = (saludo: string) => imprimeCurried(saludo)("Antonio");

saludaHola("Juan");
saludaHola("Isabel");
saludaHola("Eva");

console.log("");

saludaAntonio("Hola, soy");
saludaAntonio("Hello, my name is");

console.log("");

const nombres = ["Daniel", "Adrián", "Paloma", "Aída"];
nombres.map(saludaHola);

