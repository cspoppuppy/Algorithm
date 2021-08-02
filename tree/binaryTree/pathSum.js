// leetcode #94
// Time Complexity: O(n)
// Space Complexity: O(logN) - O(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// Depth first
var hasPathSum = function (root, targetSum) {
	if (!root) return false;
	let res = false;
	const dfs = (node, sum) => {
		sum += node.val;
		console.log(node.val, sum);
		if (!node.left && !node.right && sum === targetSum) res = true;
		if (node.left) dfs(node.left, sum);
		if (node.right) dfs(node.right, sum);
	};
	dfs(root, 0);
	return res;
};
