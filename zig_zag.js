/* Print a string in zig-zag pattern to the console */

const str = "qwerty"
const array = str.split("")

let firstRow, secondRow, output

firstRow = ""; secondRow = "";
for(let index = 0; index <= array.length; index++) {
	if (index === array.length) console.log(firstRow + "\n" + secondRow)
	else if(index % 2 === 0) firstRow += array[index] + " "
	else secondRow += " " + array[index]
}
