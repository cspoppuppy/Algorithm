// number module 2, and record reminder in stack, then pop out
// Time complexity: O(log N)
// Space complexity: O(log N)
function decimalToBinary(num) {
	if (num === 0 || num === 1) return num;
	const stack = [];
	while (num > 0) {
		reminder = num % 2;
		num = parseInt(num / 2);
		stack.push(reminder);
	}
	return stack.reverse().join('');
}

// Check
for (i = 0; i < 20; i++) {
	console.log(decimalToBinary(i));
}
