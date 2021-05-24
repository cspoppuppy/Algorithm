// leetcode #417
// Time Complexity: O(m x n)
// Space Complexity: O(m x n)
var pacificAtlantic = function (heights) {
	if (!heights || !heights[0]) return [];
	const m = heights.length;
	const n = heights[0].length;
	const pacificFlow = Array.from({ length: m }, () => new Array(n).fill(false));
	const atlanticFlow = Array.from({ length: m }, () => new Array(n).fill(false));
	// console.log(pacificFlow);
	// console.log(atlanticFlow);

	const dfs = (row, col, flow) => {
		flow[row][col] = true;
		[
			[row - 1, col],
			[row + 1, col],
			[row, col - 1],
			[row, col + 1],
		].forEach(([nextRow, nextCol]) => {
			if (
				nextRow >= 0 &&
				nextRow < m &&
				nextCol >= 0 &&
				nextCol < n &&
				!flow[nextRow][nextCol] &&
				heights[nextRow][nextCol] >= heights[row][col]
			) {
				dfs(nextRow, nextCol, flow);
			}
		});
	};

	for (let row = 0; row < m; row++) {
		dfs(row, 0, pacificFlow);
		dfs(row, n - 1, atlanticFlow);
	}

	for (let col = 0; col < n; col++) {
		dfs(0, col, pacificFlow);
		dfs(m - 1, col, atlanticFlow);
	}

	const res = [];
	for (let row = 0; row < m; row++) {
		for (let col = 0; col < n; col++) {
			if (pacificFlow[row][col] & atlanticFlow[row][col]) {
				res.push([row, col]);
			}
		}
	}
	return res;
};
