// Create array of elements
const array = [1,2,3,4,5]

// Create new array
let newArray = []

// Loop over initial array, with each new index of the new 
// array, being equal to the product of all but the current 
// iteration index of the prior array

let toProduct = [] // Hold products of the current iteration

for(let a = 0; a < array.length; a++) {
	
	// Iterate over the array an determine which should be
	// added to product array for this 'a' index
	for(let b = 0; b < array.length; b++) {
		if(a === b) { continue }
		else { toProduct.push(array[b]) }
	}

	// Multiply all for this iteration of 'a'
	let product = 1 
	for (let c = 0; c < toProduct.length; c++) {
		product *= toProduct[c] 
	}
	
	toProduct = []
	newArray[a] = product

}

// Log result
console.log(newArray)
