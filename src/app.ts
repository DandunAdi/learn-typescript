import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("Mario", "Create blog", 400);
const invTwo = new Invoice("Luigi", "Create portfolio", 200);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((invoice) => {
  console.log(invoice.format());
});

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
}

const me: IsPerson = {
  name: "DDD",
  age: 24,
  speak(text: string): void {
    console.log("Bla bla bla " + text);
  },
};

const greeting = (someone: IsPerson) => {
  someone.speak("I am Batman");
  console.log(`${someone.name} says hello`);
};

greeting(me);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
