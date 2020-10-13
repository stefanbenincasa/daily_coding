// Output a new array, from an original array, where each element has value
// to indicate the amout of smaller value to the right of that same index
// in the original array

const arrayOne = [1,2,3,5,10,11,3]
let arrayTwo, count

arrayTwo = []
count = 0

for(let i = 0; i < arrayOne.length; i++) {
	for(let j = i+1; j < arrayOne.length; j++) {
		if(arrayOne[j] < arrayOne[i]) {
			count++
			j === arrayOne.length - 1 && arrayTwo.push(count)
		}
		else {
			continue
		}
	}
}

console.log(arrayTwo)
