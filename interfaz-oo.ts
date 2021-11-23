interface IMontónDeCosas {
  hazAlgo(x: number): number;
  hazAlgoMás(x: number): string;
  hazUnaTerceraCosa(x: string): void;
}

type MontónDeCosas = (x: number) => number

const suma2 = (x: number) => x + 2;
const multiplicaPor3 = (x: number) => x * 3;

let montónDeCosas: MontónDeCosas;

montónDeCosas = suma2;
montónDeCosas = multiplicaPor3;
// todas las asignaciones son correctas