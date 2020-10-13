// Search through an array of words, and present the indices of words that if paired, would form a palindrome

let 
words, jointWord, palinIndices,
forwards, backwards, wordScanned

words = ["code" , "doc", "da", "d", "pete"]
palinIndices = []
forwards = ""
backwards = ""

for(let i = 0; i < words.length-1; i++) {

  jointWord = words[i] + words[i+1]

  // Scan over the joint word in both directions and save result
  wordScanned = false
  while(!wordScanned) {
    for(let j = 0; j < jointWord.length; j++) forwards.concat(jointWord.charAt(j))
    for(let k = jointWord.length-1; k >= 0; k--) backwards.concat(jointWord.charAt(k))
    wordScanned = true
  }
}

console.log(forwards + " " + backwards)