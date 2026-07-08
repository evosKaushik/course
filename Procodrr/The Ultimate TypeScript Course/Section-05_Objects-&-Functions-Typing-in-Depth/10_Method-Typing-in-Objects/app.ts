interface User {
  firstName: string;
  lastName: string;
  // getFullName: () => string;
  getFullName(): string;
}

const user: User = {
  firstName: "kaushik",
  lastName: "patel",
  getFullName() {
    return this.firstName + this.lastName;
  },
};
