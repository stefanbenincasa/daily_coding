/* 
	Assuming that a string was given, and any count-integer, develop the
	lexigraphically smallest string possible, after count-integer is equal to
	at least one
*/


// Globals
const string = "string"
const k = 2

// Rearrange word, placing k amount of starting characters to word rear 
let shiftedWord = getShiftedWord()

// Lexigraphically order new word characters but for new suffix
let lexiSorted = getLexiSorted(shiftedWord)

// Log
console.log(shiftedWord)

/// Functions ///

// Sort the prefix of the word by the unicode code value;
// smallest to largest
function getLexiSorted(shiftedWord) {

	let portionToSort, lexiSorted

	portionToSort = shiftedWord.substring(0, shiftedWord.length-k)
	portionToSort = portionToSort.split("")
	// Try to implement own ascending sorting algorithm
	
}

function getShiftedWord() {

	let 
	rearranged, prefix, 
	suffix, shifted
	rearranged = []

	// Get char's up to k, and order them for append
	for(let i = 0; i < k; i++) rearranged.push(string.charAt(i))

	// Rejoin new suffix to characters of string untouched
	prefix = string.substring(k, string.length)
	suffix = rearranged.join("")
	shifted = prefix.concat(suffix)

	return shifted

} 
