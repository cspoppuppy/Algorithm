// leetcode #11
// Time Complexity: O(n)
// Space Complexity: O(1)
var maxArea = function (height) {
	let left = 0;
	let right = height.length - 1;
	let maxHeight = 0;
	let maxArea = 0;

	while (left < right) {
		while (height[left] <= maxHeight && left !== height.length - 1) left++;
		while (height[right] <= maxHeight && right !== 0) right--;
		maxHeight = Math.min(height[left], height[right]);
		maxArea = Math.max(maxArea, maxHeight * (right - left));
	}

	return maxArea;
};
