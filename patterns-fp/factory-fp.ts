// la funcionalidad es independiente de los datos!
interface Product {
  name: string;
  value: number;
}
type ProductOperation = (p: Product) => string;

const someGeneralOperation = (
  productOperation: () => ReturnType<ProductOperation>
) =>
  `Creator: The same creator's code has just worked with ${productOperation()}`;

const concreteProductOperation =
  (p: Product) => (productOperation: ProductOperation) => () =>
    productOperation(p);

//aplicación parcial para almacenar el producto con el que se trabaja en cada caso
const concreteProduct1Operations = concreteProductOperation({
  name: "Product1",
  value: 1,
});
const concreteProduct2Operations = concreteProductOperation({
  name: "Product2",
  value: 2,
});

// funciones específicas con el producto como entrada
const productOperation1: ProductOperation = (p) =>
  `{Result of the ConcreteProduct1} ${p.name}: ${p.value}`;
const productOperation2: ProductOperation = (p) =>
  `{Result of the ConcreteProduct2} ${p.name}: ${p.value}`;

// wrapper de la operación general
const operation1 = () =>
  someGeneralOperation(concreteProduct1Operations(productOperation1));
const operation2 = () =>
  someGeneralOperation(concreteProduct2Operations(productOperation2));

function clientCode(someOperation: () => ReturnType<ProductOperation>) {
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
