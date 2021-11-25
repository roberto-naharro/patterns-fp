type StrategyFn = (data: string[]) => string[];

const doSomeBusinessLogic = (strategy: StrategyFn) => () => {
  console.log(
    "Context: Sorting data using the strategy (not sure how it'll do it)"
  );
  const result = strategy(["a", "b", "c", "d", "e"]);
  console.log(result.join(","));
};

const doAlgorithmA: StrategyFn = (data) => data.sort();
const doAlgorithmB: StrategyFn = (data) => data.reverse();

// aplicación parcial
const doSomeBusinessLogicA = doSomeBusinessLogic(doAlgorithmA);
console.log("Client: Strategy is set to normal sorting.");
doSomeBusinessLogicA();

console.log("");

const doSomeBusinessLogicB = doSomeBusinessLogic(doAlgorithmB);
console.log("Client: Strategy is set to reverse sorting.");
doSomeBusinessLogicB();

export {};