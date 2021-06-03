// leetcode #1
// Time Complexity: O(n)
// Space Complexity: O(n)
var twoSum = function (nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		const n2 = target - n;
		if (map.has(n2)) {
			return [map.get(n2), i];
		} else {
			map.set(n, i);
		}
	}
};
