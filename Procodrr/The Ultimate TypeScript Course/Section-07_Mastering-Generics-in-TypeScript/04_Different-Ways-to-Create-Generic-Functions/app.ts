function echo<T>(argv: T): T {
  return argv;
}

const echo2 = function <T>(argv: T): T {
  return argv;
};

const echo3 = <T>(argv: T): T => {
  return argv;
};

type MyEchoType = <T>(a: T) => T;

interface EchoType2 {
  <T>(a: T): T;
}

const echo4: MyEchoType = function (a) {
  return a;
};

let value = echo4<true>(true);
