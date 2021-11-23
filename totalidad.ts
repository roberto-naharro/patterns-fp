const divisiónNot = (dividendo: number, divisor: number): number => {
  // PROBLEMA! esta salida no es un number, es una excepción
  if (divisor === 0) {
    throw new Error("Entrada no valida");
  }
  return dividendo / divisor;
}

type Maybe<T> = { Some: T } | { None: null };

const división = (dividendo: number, divisor: number): Maybe<number> => {
  if (divisor === 0) {
    return { None: null };
  }
  return {Some: dividendo / divisor};
};

división(6, 2); // Some 3
división(6, 0); // None