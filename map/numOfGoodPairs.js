// leetcode #1512
// Time Complexity: O(n^2)
// Space Complexity: O(n)
var numIdenticalPairs = function (nums) {
	const counter = new Map();
	nums.forEach((num) => {
		counter.set(num, counter.has(num) ? counter.get(num) + 1 : 1);
	});
	return [...counter.values()].reduce((sum, val) => sum + (val * (val - 1)) / 2, 0);
};
