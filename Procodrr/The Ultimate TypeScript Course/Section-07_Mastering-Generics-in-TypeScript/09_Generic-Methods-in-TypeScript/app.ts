interface Store<T> {
  list: T[];
  transformString<U>(index: number, cb: (item: string) => U): U;
}

const strStore: Store<string> = {
  list: ["Ram", "Aman", "Akash"],
  transformString(index: number, cb) {
    return cb(this.list[index]);
  },
};

const result = strStore.transformString(2, (item) => ({ name: item }));

console.log(result);
