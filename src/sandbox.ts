type strOrNum = string | number;
type objWithName = { name: string; uid: strOrNum };

const logDetails = (uid: strOrNum, item: string): void => {
  console.log(`${item} has id of ${uid}`);
};

const greet = (user: objWithName): void => {
  console.log(`${user.name} says hello`);
};

const greetAgain = (user: objWithName): void => {
  console.log(`${user.name} says hi!`);
};
