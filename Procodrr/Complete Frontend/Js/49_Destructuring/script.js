
const colors = ["red", "green", "yellow", "pink", "black"];

// // const colors1 = colors[0]
// // const colors2 = colors[1]
// // const colors3 = colors[2]

// // const [color1, color2, color3] = colors;
// // const [,, color3] = colors;
// // const [,,,, color] = colors
// const {4: color, 3: color3} = colors


// const user = {
//   name: "Kaushik",
//   age: 25,
//   address: {
//     state: "Uttar Pradesh",
//     city: "Varanasi",
//   },
// };





// // const age = user.age
// // const name = user.name


// // const {name: username, age: userage} = user
// // const {address: {city}} = user
// // const {address: {city: usercity}} = user

// // const {address} = user

// // const {city} = address

// // const {address{city: usercity}} = user;

// function intro({age, name, address:{ city : usercity}}) {
//     console.log(age, name, usercity);
// }



// // function intro({ age, name, address: { city: usercity } }) {
// //   console.log(age, name, usercity);
// // }

// intro(user); // 25 "Kaushik" "Varanasi"

// intro(user)
// const user = {
//   name: "Kaushik",
//   age: 25,
//   address: {
//     state: "Uttar Pradesh",
//     city: "Varanasi",
//   },
// };

const user = {
  name: "Kaushik",
  age: 25,
  address: {
    state: "Uttar Pradesh",
    city: "Varanasi",
  },
};

function intro({name, age, address: {city : usercity}}) {
    console.log(name, age, usercity);
}

intro(user); // 25 "Kaushik" "Varanasi"
