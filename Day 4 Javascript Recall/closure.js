function parent(a) {
  const b = 10;
//   variable, obj, function, parameter 
  return function abc() {
    console.log(a + b);
  };
}

const result = parent(5);
result();
// console.log(result);
