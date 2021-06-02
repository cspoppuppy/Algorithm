// leetcode #237
// Time Complexity: O(1)
// Space Complexity: O(1)
// replace knowing node with next node content, then remove next node
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
	node.val = node.next.val;
	node.next = node.next.next;
};
