// leetcode #933
// Time Complexity: O(n)
// Space Complexity: O(n)
// Add new request to queue, remove request over 3000ms ago from queue, count
var RecentCounter = function () {
	this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
	this.queue.push(t);
	while (this.queue[0] < t - 3000) {
		this.queue.shift();
	}
	return this.queue.length;
};

const obj = new RecentCounter();
ts = [1, 100, 3001, 3002];
let output = [];

ts.forEach((t) => {
	output.push(obj.ping(t));
});

console.log(output);
