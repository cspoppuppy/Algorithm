// leetcode #349
// Time Complexity: O(m + n) [m: length of new Set(nums1)]
// Space Complexity: O(m)? (O(m+n))
var intersection = function (nums1, nums2) {
	const map = new Map();
	nums1.forEach((n) => {
		map.set(n, true);
	});

	const res = [];
	nums2.forEach((n) => {
		if (map.get(n)) {
			res.push(n);
			map.delete(n);
		}
	});
	return res;
};
