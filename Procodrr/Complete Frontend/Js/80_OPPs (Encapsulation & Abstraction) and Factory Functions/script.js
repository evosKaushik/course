

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear() {
      return new Date().getFullYear() - user.age;
    },
  };
  return user;
}


const user1 = createUser("DjALok", "Mfia", 69)

const arr1 = [1, 2]
const arr2 = [3, 4]