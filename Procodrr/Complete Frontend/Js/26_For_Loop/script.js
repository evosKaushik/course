console.log("Program Started");


const friend = ['Darsh', 'Ayush', 'Siddharth', 'Reyansh', 'Mohit', 'Ayushman']
// debugger
for (let i = 0; i < friend.length; i++) {
    friend[i] += ' Procodrr'
    console.log(`${i + 1}. ${friend[i]}`);
}


console.log('The number below is even number');
for (let i = 0; i <= 100; i++) {
    if ((i % 2) ===  0) {
        console.log(i);
    }
}
// console.log('The number below is odd number');
// for (let i = 0; i <= 100; i++) {
//     if ((i % 2) !=  0) {
//         console.log(i);
//     }
// }
console.log("Program Ended");
