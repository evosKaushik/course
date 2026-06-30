interface IUser {
  name: string;
  age: number;
}

interface IUser {
  address:{
    street: string,
    pinCode: number
  }
}

type TUser = {
    name: string;
  age: number;
}


type User = IUser

