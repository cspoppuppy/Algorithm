// leetcode #349
// Time Complexity: O(m * n) [m: length of new Set(nums1)]
// Space Complexity: O(m)
var intersection = function (nums1, nums2) {
	return [...new Set(nums1)].filter((n) => nums2.includes(n));
};
