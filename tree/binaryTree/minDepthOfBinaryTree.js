// leetcode #111
// Time Complexity: O(n)
// Space Complexity: O(n)
var minDepth = function (root) {
	if (!root) return 0;

	const queue = [[root, 1]];

	while (queue.length) {
		const [node, level] = queue.shift();
		if (!node.left && !node.right) return level;
		if (node.left) queue.push([node.left, level + 1]);
		if (node.right) queue.push([node.right, level + 1]);
	}
};
