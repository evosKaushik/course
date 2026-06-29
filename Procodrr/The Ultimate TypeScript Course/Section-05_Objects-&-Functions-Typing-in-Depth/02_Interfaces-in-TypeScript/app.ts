interface User {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
  address?: {
    street: string;
    pinCode: number;
  };
}

const user: User = {
  name: "Kaushik",
  age: 4,
  email: "kaushik@gmail.com",
  isStudent: true,
  address: {
    pinCode: 221001,
    street: "I live inside the beautiful earth ❤️",
  },
};
const user2: User = {
  name: "Kaushik",
  age: 4,
  email: "kaushik@gmail.com",
  isStudent: true,
};
