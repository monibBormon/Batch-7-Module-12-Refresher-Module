/* Array Slice
- Start Index & End Index
- End Index not included
- Do not Change Original Array
*/

const arrSlice = [5, 3, 1, 7, 9];
const result = arrSlice.slice(0, 4);
// console.log(result);
// console.log(arrSlice);

/* Array Splice 
- It takes 3 Parameters
    - Start Index
    - How many items we want to remove
    - Replace with New Elements in the place of deleted items.
- Directly Modify the original array and return new Array
- If we don't want to remove any elements then we can use 0 & Add multiple item
*/
const arrSplice = [5, 3, 1, 7, 9];

// arrSlice.splice(0, 2);
// console.log(arrSlice);

/* Array Reduce
- It does not change main array
- It takes PrevValue, CurrentValue, CurrentIndex, Main Array
- Default Value 2nd Parameter a Initial Value
- It makes an array into a single value. That's why it is called Reduce
*/

const arrReduce = [5, 3, 1, 7, 9];

const result2 = arrReduce.reduce((prev, currVal, currIndex, arr) => {
  return prev + currVal;
}, 100); // initial Value

// console.log(result2);

const obj = {
  firstName: "Monib",
  age: 20,
};

const { firstName, age } = obj;
// console.log(firstName, age);

// Ternary Operator es6
const isTrue = false;

const result3 = isTrue ? "I am valid" : "I am not valid";
console.log(result3);
