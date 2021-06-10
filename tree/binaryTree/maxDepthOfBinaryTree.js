// leetcode #104
// Time Complexity: O(n)
// Space Complexity: O(logN) - O(n)
var maxDepth = function (root) {
	let res = 0;
	const dfs = (node, level) => {
		if (!node) return;
		if (!node.left && !node.right) res = Math.max(res, level);
		dfs(node.left, level + 1);
		dfs(node.right, level + 1);
	};
	dfs(root, 1);
	return res;
};
