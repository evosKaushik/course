const user = {
  firstName: "Kaushik",
  lastName: "Singh",
  age: 25,
  address: {
    city: 'Varanasi'
  },
  // getFullName: function () {
  //   return user.firstName +' '+ user.lastName
  // }
};

const a = 'city'


// console.log(user.address && user.address.city); 
// console.log(user?.address?.city); 
// console.log(user?.address?.[a]); 
console.log(user.getFullName?.()); 
