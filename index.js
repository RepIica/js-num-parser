// 3434667
// three million four hundred thirty four thousand six hudnred sixty seven

// 1billin > n > 0, whole numbers only
// return n in english word format

const digitToString = (n) => {
    switch (n) {
        case 1:
            return "one"
            break
        case 2:
            return "two"
            break
        case 3:
            return "three"
            break
        case 4:
            return "four"
            break
        case 5:
            return "five"
            break
        case 6:
            return "six"
            break
        case 7:
            return "seven"
            break
        case 8:
            return "eight"
            break
        case 9:
            return "nine"
            break
    }
}

const twoDigitsToString = (n) => {
    const firstDigit = parseInt(n.toString()[0])

    switch (firstDigit) {
        case 1:
            return "ten"
            break
        case 2:
            return "twenty"
            break
        case 3:
            return "thirty"
            break
        case 4:
            return "fourty"
            break
        case 5:
            return "fifty"
            break
        case 6:
            return "sixty"
            break
        case 7:
            return "seventy"
            break
        case 8:
            return "eighty"
            break
        case 9:
            return "ninety"
            break
    }
}

const toString = (n) => {
    const nLength = n.toString().length
    switch (true) {
        case nLength === 1:
            return digitToString(n)
            break;
        case nLength === 2:
            return twoDigitsToString(n) + parseInt(n.toString()[0])
            break;
        default:
            return "nLength larger than whatever"
    }
}

n = 24
console.log(twoDigitsToString(n))
console.log(toString(n))

const stringifyDigits = (n) => {
    const nLength = n.toString().length
    return nLength === 1 ? digitToString(n) : "idk"
}

const iterateDigits = (n) => {
    const nLength = n.toString().length
    const nString = n.toString()
    for (let v = 0; x < nLength; x++) {
        nString[x]
    }
}

console.log("new: ", stringifyDigits(n))
