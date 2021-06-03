// leetcode #3
// Time Complexity: O(n)
// Space Complexity: O(m) - m no repeating characters
var lengthOfLongestSubstring = function (s) {
	let startPos = 0;
	let maxLength = 0;
	const passedChars = new Map();
	for (let i = 0; i < s.length; i++) {
		if (passedChars.has(s[i]) && passedChars.get(s[i]) >= startPos) {
			startPos = passedChars.get(s[i]) + 1;
		}
		maxLength = Math.max(maxLength, i - startPos + 1);
		passedChars.set(s[i], i);
	}
	return maxLength;
};
