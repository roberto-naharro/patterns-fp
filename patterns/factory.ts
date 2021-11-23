abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

interface Product {
  name: string;
  value: number;
  operation(): string;
}

class ConcreteProduct1 implements Product {
  name = "Product1";
  value = 1;
  public operation(): string {
    return `{Result of the ConcreteProduct1} ${this.name}: ${this.value}`;
  }
}

class ConcreteProduct2 implements Product {
  name = "Product2";
  value = 2;
  public operation(): string {
    return `{Result of the ConcreteProduct2} ${this.name}: ${this.value}`;
  }
}

function clientCode(creator: Creator) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
}

console.log("App: Launched with the ConcreteCreator1.");
clientCode(new ConcreteCreator1());
console.log("");

console.log("App: Launched with the ConcreteCreator2.");
clientCode(new ConcreteCreator2());
