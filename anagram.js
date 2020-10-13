// Find the starting indices of any anagramical occurence of the word
// within the string

const word = "ha"
let string, startingIndices

string = "hannah"
startingIndices = []

// This solution only works in a rightward direction
// It does not account for the presence of a character to the left that
// might qualify another anagram

// Revise
// Correct - very rough, based on conditionals - solution found

const searchLeft = function(i) {
  if(
    (string.charAt(i) === "a" || string.charAt(i) === "h") 
	  && 
    (string.charAt(i-1) === "a" || string.charAt(i-1) === "h") 
  ) 
  { 
    startingIndices.push(i) 
  } else {
    return
  }
}

const searchRight = function(i) {
  if(
    (string.charAt(i) === "a" || string.charAt(i) === "h") 
	  && 
    (string.charAt(i+1) === "a" || string.charAt(i+1) === "h") 
  ) 
  { 
    startingIndices.push(i) 
  } else {
    return
  }
}

let status
for(let i = 0; i < string.length; i++) {
  
	if(i > 0) {
    searchLeft(i)
    searchRight(i)
  }
  else {
    searchRight(i)
  }

}

console.log(startingIndices) 