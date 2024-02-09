const word = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']


let addWord1 = "add Word 1"

// add length to addWord1.length
for (let i = 0; i < addWord1.length; i++) { // change i-- to i++
    word[i] = addWord1[i]
}

let addWord2 = "add Word 2"

// Should start at addWord1.length + 1
for (let i = addWord1.length + 1; i < addWord2.length + addWord1.length + 1; i++) {// replace j++ with i++

    // replace word[0] with word[i]
    word[i] = addWord2[i - addWord1.length - 1]
}

// print tries to print the page in javascript, replace print with console.log
console.log(word.join(""))
