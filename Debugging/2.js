

const getNum = (i) => {

    switch(i) {
        let answer
        case 1:
            answer = 1
        case 5:
            answer = 100
        case 2:
            answer = 10
        case 4:
            answer = 1000
        case 3:
            answer = "100000"
        default:
            answer = 10000
    }
    return answer
}

const total
// get the sum of numbers 0 to 5
for (let i = 0; i <= 6; i++) {
    let total = getNum(i)  
}

console.log(total) // should output "111111"

// TOTAL NUMBER OF ERRORS: 11