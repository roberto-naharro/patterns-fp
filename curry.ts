// función normal con 2 parámetros
function suma2params(x: number, y: number) {
  return x + y;
}

// función como "cosa"
const sumaCosa = (x: number, y: number) => x + y;

// función con un parámetro
const suma = (x: number) => (y: number) => x + y;

let tres = 1 + 2

tres = suma(1)(2)

const suma1 = suma(1);
tres = suma1(2);