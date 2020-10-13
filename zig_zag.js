/* Print a string in zig-zag pattern to the console */

const str = "qwerty"
const array = str.split("")

// Main
let index, step, limit, output

// Handle printing 

step = array.length / 2 - 1
limit = array.length
index = 0

while(index < limit) {
	// output += index % 2 === 0 ? console.log(array[index])
	index += step
} 


/// Functions /// 
function isWithinArrayLength(array, index) {
	return index <= array.length - 1 ? true : false
}
