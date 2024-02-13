
const getNum = (i) => {
    
    let answer // add declaration to before switch statement
    switch(i) {
        case 1:
            answer = 1
            break; // add break
        case 5:
            answer = 100
            break; // add break
        case 2:
            answer = 10
            break; // add break
        case 4:
            answer = 1000
            break; // add break
        case 3:
            answer = 100000 // make number
            break; // add break
        default:
            answer = 10000
    }
    return answer
}

// change to let or var and set to 0
let total = 0

// change i <= 6 to i < 6;
for (let i = 0; i < 6; i++) {
    // change = to +=
    total += getNum(i)  // drop let
}

console.log(total) // should output "111111"