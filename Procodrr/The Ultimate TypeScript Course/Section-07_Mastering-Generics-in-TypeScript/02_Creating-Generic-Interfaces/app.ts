interface FormData<T> {
  isValid: boolean;
  data: T;
};

interface RegisterForm {
  name: string;
  email: string;
  password: string;
};

interface loginForm {
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
