const imprime = (saludo: string, nombre: string) => console.log(saludo, nombre);
imprime(`Hola, mi nombre es`, "Juan");

const imprimeCurried = (saludo: string) => (nombre: string) =>
  console.log(saludo, nombre);
imprimeCurried(`Hola, mi nombre es`)("Juan");

// saludaHola es una función parcialmente aplicada que podemos usar en cualquier sitio
const saludaHola = imprimeCurried(`Hola, mi nombre es`);

saludaHola("Juan");
saludaHola("Isabel");
saludaHola("Eva");

const nombres = ["Daniel", "Adrián", "Paloma", "Aída"];
nombres.map(saludaHola);

////////////////////////////////
import { filter, map, pipe } from "ramda";

const suma1 = (x: number) => x + 1;
const esIgual2 = (x: number) => x === 2;

const operaLista = pipe(
  map(suma1), 
  filter(esIgual2)
);

operaLista([1, 2, 3, 4, 5, 6, 7, 8, 9]);
