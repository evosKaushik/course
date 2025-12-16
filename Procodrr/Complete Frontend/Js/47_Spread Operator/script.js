const nums1 = [1, 2, 3, 4, 5]
const nums2 = [6, 7, 8, 9, 10]

// const myName = "Kaushik"

// const joinedArray = [...nums1, ...nums2]
const joinedArray = [...nums1, ...nums2]

console.log(joinedArray);

// const user = {
//   name: "Kaushik",
//   age: 14,
// };

// const updatedUser = {...user, city: 'Varanasi'}
// console.log(updatedUser);


function add() {
    let result = 0;
    for (let index = 0; index < arguments.length; index++) {
        result = result + arguments[index];
    }
    return result
}

function name() {
    console.log(arguments);
}