// leetcode #20
// Time Complexity: O(n)
// Space Complexity: O(n)
var isValid = function (s) {
	if (s.length % 2 === 1) return false;
	const leftBrackets = [];
	for (let i = 0; i < s.length; i++) {
		c = s[i];
		if (c === '(' || c === '[' || c === '{') {
			// left bracket
			// put in stack
			leftBrackets.push(c);
		} else {
			// right bracket
			// get last left bracket
			top = leftBrackets.pop();
			if ((c === ')' && top !== '(') || (c === ']' && top !== '[') || (c === '}' && top !== '{')) {
				// not match the corresponding right bracket
				return false;
			}
		}
	}
	return leftBrackets.length === 0;
};
