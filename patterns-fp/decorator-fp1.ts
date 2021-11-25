type Operation = () => string;

const operation = () => "ConcreteComponent";

const concreteDecoratorA =
  (op: Operation): Operation =>
  () =>
    `ConcreteDecoratorA(${op()})`;
const concreteDecoratorB =
  (op: Operation): Operation =>
  () =>
    `ConcreteDecoratorB(${op()})`;

function clientCode(operation: Operation) {
  console.log(`RESULT: ${operation()}`);
}

const simple = operation;
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log("");

//aplicación parcial
const decorator1 = concreteDecoratorA(operation);
const decorator2 = concreteDecoratorB(decorator1);
console.log("Client: Now I've got a decorated component:");
clientCode(decorator2);

export {};