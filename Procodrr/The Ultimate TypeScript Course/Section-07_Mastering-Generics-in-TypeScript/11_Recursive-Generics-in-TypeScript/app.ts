type Tree<T> = {
  value?: Tree<T>;
};

let a: Tree<string> = {
  value: {},
};
