// leetcode #141
// Time Complexity: O(n)
// Space Complexity: O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	let slowPtr = head;
	let fastPtr = head;
	while (fastPtr && fastPtr.next) {
		slowPtr = slowPtr.next;
		fastPtr = fastPtr.next.next;
		if (slowPtr === fastPtr) return true;
	}
	return false;
};
