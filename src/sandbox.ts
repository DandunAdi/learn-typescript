let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string): void => {
  console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;
calc = (x: number, y: number, operator: string): number => {
  if (operator === "+") {
    return x + y;
  } else {
    return x - y;
  }
};

let showInfo: (obj: { name: string; age: number }) => void;

type Person = { name: string; age: number };
showInfo = (person: Person) => {
  console.log(`${person.name} is ${person.age} years old.`);
};
