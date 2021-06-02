// is A instanceof B
const instanceOf = (A, B) => {
	let p = A;
	while (p) {
		if (p === B.prototype) return true;
		p = p.__proto__;
	}
	return false;
};

console.log('[]', 'is instance of Array', instanceOf([], Array), 'is instance of Object', instanceOf([], Object));
