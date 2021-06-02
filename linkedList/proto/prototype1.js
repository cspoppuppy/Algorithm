const obj = {};
console.log('obj: ', obj.__proto__ === Object.prototype);
console.log('obj: ', 'is instance of Object - ', obj instanceof Object);
const func = () => {};
console.log('func: ', func.__proto__ === Function.prototype);
console.log(('func: ', (func.__proto__.__proto__ = Object.prototype))); // null
console.log(
	'func: ',
	'is instance of Function - ',
	func instanceof Function,
	'is instance of Object - ',
	func instanceof Object
);
const arr = [];
console.log('arr: ', arr.__proto__ === Array.prototype);
console.log('arr: ', (arr.__proto__.__proto__ = Object.prototype)); // null
console.log(
	'arr: ',
	'is instance of Array - ',
	arr instanceof Array,
	'is instance of Object - ',
	arr instanceof Object
);
