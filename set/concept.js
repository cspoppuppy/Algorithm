const arr = [1, 1, 2, 2];
// remove duplicates
const arr2 = [...new Set(arr)];

// element in set
const set = new Set(arr);
const has1 = set.has(1);
const has2 = set.has(2);
const has3 = set.has(3);

// U
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter((item) => set2.has(item)));
