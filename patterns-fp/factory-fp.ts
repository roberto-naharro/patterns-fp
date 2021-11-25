import { pipe } from "ramda";

// la funcionalidad es independiente de los datos!
// tipos de datos
type Product = {
  name: string;
  value: number;
}
// funcionalidad
const someOperation = (str: string) =>
  `Creator: The same creator's code has just worked with ${str}`;

const productTransform1 = (p: Product) =>
  `{Result of the ConcreteProduct1} ${p.name}: ${p.value}`;
const productTransform2 = (p: Product) =>
  `{Result of the ConcreteProduct2} ${p.name}: ${p.value}`;

// composición + aplicación parcial para aplicar las funciones requeridas al producto
const operation1 = () =>
  pipe(productTransform1, someOperation)({ name: "Product1", value: 1 });
const operation2 = () =>
  pipe(productTransform2, someOperation)({ name: "Product2", value: 2 });

function clientCode(someOperation: () => string) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(someOperation());
}

console.log("App: Launched with the ConcreteCreator1.");
clientCode(operation1);
console.log("");

console.log("App: Launched with the ConcreteCreator2.");
clientCode(operation2);

export {};