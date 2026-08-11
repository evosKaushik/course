type FormData<T> = {
  isValid: boolean;
  data: T;
};

type RegisterForm = {
  name: string;
  email: string;
  password: string;
};

type loginForm = {
  isValid: boolean;
  data: {
    name: string;
    email: string;
  };
};

const registerFormData: FormData<RegisterForm> = {
  isValid: true,
  data: {
    name: "Hacker",
    email: "Hacker404@gmail.com",
    password: "unhackablePassword"
  },
};

export {};
