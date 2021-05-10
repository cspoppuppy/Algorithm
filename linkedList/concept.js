// no linked list in JavaScript
// use object instead
// vs list: don't need to move other elements when insert or delete non start/end element
const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

// traverse
let p = a;
while (p) {
	console.log(p.val);
	p = p.next;
}

// insert
const e = { val: 'e' };
c.next = e;
e.next = d;

// delete
c.next = d;
