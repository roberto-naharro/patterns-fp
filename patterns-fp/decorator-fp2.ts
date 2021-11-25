import { pipe } from "ramda";

type Operation = () => string;
const operation = () => "ConcreteComponent";

const concreteDecoratorA = (
  result: ReturnType<Operation>
): ReturnType<Operation> => `ConcreteDecoratorA(${result})`;
const concreteDecoratorB = (
  result: ReturnType<Operation>
): ReturnType<Operation> => `ConcreteDecoratorB(${result})`;

function clientCode(operation: Operation) {
  console.log(`RESULT: ${operation()}`);
}

const simple = operation;
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log("");

//Composición
const decorator1 = pipe(operation, concreteDecoratorA);
const decorator2 = pipe(decorator1, concreteDecoratorB);
console.log("Client: Now I've got a decorated component:");
clientCode(decorator2);

export {};