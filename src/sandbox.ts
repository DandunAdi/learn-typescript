const greet = () => {
  console.log("Hello");
};

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log("C is: " + c);
};
add(1, 2);

const substract = (a: number, b: number): number => {
  return a - b;
};
console.log(substract(10, 15));
