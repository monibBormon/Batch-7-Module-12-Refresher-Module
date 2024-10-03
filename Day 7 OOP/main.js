class Person {
  // Private field
  #name;

  constructor(name) {
    this.#name = name; // Accessing private field inside the class
  }

  // Public method to access the private property
  getName() {
    return this.#name;
  }

  // Private method
  #privateMethod() {
    console.log("This is a private method");
  }

  // Public method to call the private method
  callPrivateMethod() {
    this.#privateMethod();
  }
}

const person = new Person("Alice");
