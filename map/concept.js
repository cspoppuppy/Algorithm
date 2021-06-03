const m = new Map();

// add
m.set('a', 'aa');
m.set('b', 'bb');
m.set('c', 'cc');
console.log(m.get('a'));
console.log('add a and b: ', m);

// delete
m.delete('b');
console.log('delete b: ', m);
// m.clear();
//console.log('delete all:', m);

// amend
m.set('a', 'aaa');
console.log(m);

// in map
console.log('map has a: ', m.has('a'));
console.log('map has b: ', m.has('b'));
