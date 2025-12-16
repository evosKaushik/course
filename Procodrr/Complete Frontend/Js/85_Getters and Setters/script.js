// class CreateUser {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   static hi = 'Hello World'

//   static{
//     console.log('first')
//   }

//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   }

//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }


// // const user1 = new CreateUser("Aman", "Mishra", 32);
// const user2 = new CreateUser("Anurag", "Singh", 72);



const user = {
  firstName: 'Kaushik',
  lastName: 'Patel',
  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}


// console.log(user.fullName())

// user.fullName = 'Akash Kumar'