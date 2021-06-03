// leetcode #76
// Time Complexity: O(m+n)
// Space Complexity: O(m)
var minWindow = function (s, t) {
	const counter = new Map();
	for (let c of t) {
		counter.set(c, counter.has(c) ? counter.get(c) + 1 : 1);
	}
	let counterSize = counter.size;

	let startPos = 0;
	let res = '';
	for (let endPos = 0; endPos < s.length; endPos++) {
		c = s[endPos];
		if (counter.has(c)) {
			counter.set(c, counter.get(c) - 1);
			if (counter.get(c) === 0) counterSize -= 1;
		}
		while (counterSize === 0) {
			const newRes = s.substring(startPos, endPos + 1);
			res = res && res.length < newRes.length ? res : newRes;
			const c2 = s[startPos];
			if (counter.has(c2)) {
				counter.set(c2, counter.get(c2) + 1);
				if (counter.get(c2) === 1) counterSize += 1;
			}
			startPos += 1;
		}
	}
	return res;
};
