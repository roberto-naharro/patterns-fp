const divisiónNot = (dividendo: number, divisor: number): number => {
  // PROBLEMA! esta salida no es un number, es una excepción
  if (divisor === 0) {
    throw new Error("Entrada no valida");
  }
  return dividendo / divisor;
}

type Maybe<T> = { Some: T } | { None: null };

const divisiónSalidaAumentada = (dividendo: number, divisor: number): Maybe<number> => {
  if (divisor === 0) {
    return { None: null };
  }
  return {Some: dividendo / divisor};
};

divisiónSalidaAumentada(6, 2); // Some 3
divisiónSalidaAumentada(6, 0); // None