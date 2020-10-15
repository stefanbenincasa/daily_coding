/* 
	Assuming that a string was given, and any count-integer, develop the
	lexigraphically smallest string possible, after count-integer is equal to
	at least one
*/

const string = "string"
const k = 2


/* Rearrange word, placing k amount of starting characters to
word rear */
console.log(getShiftedWord())

// Lexigraphically order new word characters but for new suffix

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
