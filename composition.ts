import { pipe } from "ramda";

const damePrimeraPalabra = (frase: string) => frase.split(" ")[0];

const cuentaAes = (palabra: string) =>
  palabra
    .toLowerCase()
    .split("")
    .filter((a) => a === "a").length;

// composición
const cuentaAesPrimeraPalabra = pipe(damePrimeraPalabra, cuentaAes);
//Equivalente a (frase) => cuentaAes(damePrimeraPalabra(frase))

//test
console.log(cuentaAesPrimeraPalabra("Anacardo es un fruto seco"));
// -> 3
