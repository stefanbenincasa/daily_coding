// Reverse a "singly" linked list

let previous, current, next, list

list = {
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

previous = null
current = list.head
console.log(setReversed())

function setReversed() {
	while(current !== null) {
		previous = current
		current = current.next
	}
}
