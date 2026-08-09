type T1 = number[];
type T2 = [1, 2]; // supertype of T1

type T3 = T1 & T2; // type will be [1,2] only

// (number | string)[] Heterogeneous array type
// number[] | string[] Homogeneous array type
let a!: never;
let b!: never;

const arr: T3 = [1, 2];


