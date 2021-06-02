const obj = {};
Object.prototype.x = 'x';

console.log('obj.x: ', obj.x);

const func = () => {};
Function.prototype.y = 'y';
console.log('func.x: ', func.x, 'func.y: ', func.y);
