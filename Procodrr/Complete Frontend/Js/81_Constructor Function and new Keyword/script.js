

function CreateUser(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}



const user1 = new CreateUser("DjALok", "Mfia", 45);
const user2 = new CreateUser("Kaushik", "Patel", 14);

function sayHi() {
  // console.log('hii')
  console.log(this)
}