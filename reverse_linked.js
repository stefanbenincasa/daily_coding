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

let reversed, linked
reversed = getReversed(list.head)
setLinked(reversed)
console.log(linked)

function getReversed(head) {

	let node, tail, array

	array = []
	tail = getTail(head.next ? head.next : null)
	node = head

	if(!head||!head.next) return null 
	else {

		while(node.next) {
			array.unshift(node.value)
			node = node.next
		}

		array.unshift(tail.value)

	}

	return array

}

function setLinked(array) {

	let object, objects

	object = {}; objects = [];
	for(let i = 0; i < array.length; i++) 
		object.value = array[i].value
		object.next = {}
		objects.push(object)
		object = {}

	for(let i = 0; i < array.length - 1; i++) 
		objects[i].next = objects[i+1]
	
}

function getTail(node) {
	if(!node) return null
	else if(node.next) return getTail(node.next)
	else return node
}
