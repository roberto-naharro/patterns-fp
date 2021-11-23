const imprimeLista = <T>(lista: Array<T>, acción: (elem: T) => void) => {
  for (const i of lista) {
    //comportamiento hardcodeado, uff...
    acción(i);
  }
}

imprimeLista([1,2,3,4,5,6,7,8,9], console.log);
