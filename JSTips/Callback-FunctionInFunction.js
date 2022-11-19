const sum = (a, b) => {
  return a + b;
};

const diff = (a, b) => {
  return a - b;
};

const sumsum = (func) => {
  let x = 10;
  let y = 15;
  return func(x, y);
};
console.log(sumsum(sum));
