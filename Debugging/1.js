// We have a string of a fixed size of 21
const word = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']


let addWord1 = "add Word 1"

for (let i = 0; i < addWord1; i--) {
    word[i] = addWord1[i]
}

let addWord2 = "add Word 2"

for (let i = 0; i < addWord2.length + addWord1.length + 1; j++) {
    word[0] = addWord2[i - addWord1.length - 1]
}


// Output should be
// "add Word 1 add Word 2"
print(word.join(""))

// TOTAL NUMBER OF ERRORS: 6