// //! Question 1

// const rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += '*'
//   }
//   console.log(str);
// }

// //! Question 2

// const rows2 = 10;

// for (let i = rows2; i >= 1; i--) {
//     let starStr = ''
//     for (let j = 1; j <= i; j++) {
//         starStr += '*'
//     }
//     console.log(starStr)
// }

// //! Question 3

// const rows3 = 5;

// for (let i = 1; i <= 2 * rows3 - 1; i += 2) {
//   let str = "";
//   const currentRow = (i + 1) / 2;
//   for (let j = 1; j <= rows3 + currentRow - 1; j++) {
//     if (j <= rows3 - currentRow) {
//       str += " ";
//     } else {
//       str += "*";
//     }
//   }
//   console.log(str);
// }

// //! Question 4

// const rows3 = 5;

// for (let i = 2 * rows3 - 1; i >= 1; i -= 2) {
//   let str = "";
//   const currentRow = (i + 1) / 2;
//   for (let j = 1; j <= rows3 + currentRow - 1; j++) {
//     if (j <= rows3 - currentRow) {
//       str += " ";
//     } else {
//       str += "*";
//     }
//   }
//     console.log(str);
// }

// //! Question 5

// const row4 = 5;

// for (let i = 1; i <= row4; i++) {
//   if (i === 1 || i === row4) {
//     let startStr = "";
//     for (let j = 1; j <= row4; j++) {
//       startStr += "*";
//     }
//     console.log(startStr);
//   } else {
//     let startStr = "";
//     for (let j = 1; j <= row4; j++) {
//       if (j === 1 || j === row4) {
//         startStr += "*";

//       }else{
//         startStr += " "
//       }
//       console.log(startStr)
//     }
//   }
// }


//? Home Question 


//? Question 4


const row4 = 5

for (let i = (row4 * 2) - 1; i >= row4 ; i++) {
    console.log(i) 
}


//? Question 6

// const row6 = 5

// for (let i = (row6 * 2) - 1; i >= row6 ; i--) {
//     // console.log(i)
//     let starStr = ''
//     for (let j = 1; j <= i; j++) {
//         if (j <= i - row6) {
//             starStr += ' '
//         }else{
//             starStr += '*'
//         }
//     }
//     console.log(starStr)
// }

//? Question  7

// const tableNumber = 5

// for (let i = 1; i <= 10; i++) {
//     console.log(`${tableNumber} X ${i} = ${tableNumber * i}`)
// }



// const tableNumberUpTo = 3

// for (let i = 1; i <= tableNumberUpTo; i++) {
//     console.log(`Table of ${i}`)
//     for (let j = 1; j <= 10; j++) {
//     console.log(`${tableNumberUpTo} X ${j} = ${tableNumberUpTo * j}`)
//     }
// }