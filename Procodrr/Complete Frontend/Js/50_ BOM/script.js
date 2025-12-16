function reverseString(str) {
    // write your code below
    let reversedString = String(str).split('').reverse().join().trim(',')
    return reversedString
}

console.log(reverseString('hello'));