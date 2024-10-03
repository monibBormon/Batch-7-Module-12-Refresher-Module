class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  _changeName(n) {
    this._name = n;
  }

  getName() {
    return this._name;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    this._name = n;
  }
}

const n1 = new Person("Monib", 20);
const n2 = new Person("Bormon", 50);

n1.name = "Test Name";
console.log(n1);
