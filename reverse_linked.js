// Reverse a "singly" linked list

let list = {
	head: {
		value: 10,
		next: {
			value: 12,
			next: {
				value: 14
			}
		}
	}
}

console.log(getReversed(list))

function getReversed(list) {

	let node, previous, head, tail, reversed 
	head = list.head
	node = head

	if(!head) return null
	else if(!head.next) return head.value
	else {

		while(node.next) {
			previous = node
			node = node.next
		}

		tail = node

	}

}
