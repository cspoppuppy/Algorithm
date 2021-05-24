let mySet = new Set();

// add
mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add('hi');
let obj = { a: 1, b: 2 };
mySet.add(obj);
mySet.add({ a: 1, b: 2 }); //this will be added too

// has
const has1 = mySet.has(1);
const hasHi = mySet.has('hi');
const hasObj = mySet.has(obj);

// delete
mySet.delete(5);

// iterate
for (let item of mySet) console.log(item);
for (let item of mySet.keys()) console.log(item);
for (let item of mySet.values()) console.log(item);
for (let [key, value] of mySet.entries()) console.log([key, value]);

// set -> array
const myArr = [...mySet];
const myArr = Array.from(mySet);

// array -> set
const mySet2 = new Set([1, 2, 3, 4]);

// intersection
const intersection = new Set([...mySet].filter((x) => mySet2.has(x)));

// difference
const difference = new Set([...mySet].filter((x) => !mySet2.has(x)));
