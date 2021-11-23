import { pipe } from "ramda";

const damePrimeraPalabra = (frase: string) => frase.split(" ")[0];

const cuentaAes = (palabra: string) =>
  palabra
    .split("")
    .reduce(
      (count: number, char: string) =>
        char.toLowerCase() === "a" ? count + 1 : count,
      0
    );

// composición
const cuentaAesPrimeraPalabra = pipe(damePrimeraPalabra, cuentaAes);
//Equivalente a (frase) => cuentaAes(damePrimeraPalabra(frase))

//test
console.log(cuentaAesPrimeraPalabra("Anacardo es un fruto seco"));
// -> 3
