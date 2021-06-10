// leetcode #102
// Time Complexity: O(n)
// Space Complexity: O(n)

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return [];
	const queue = [root];
	const res = [];
	while (queue.length) {
		let len = queue.length;
		res.push([]);
		while (len--) {
			const node = queue.shift();
			res[res.length - 1].push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}
	return res;
};
