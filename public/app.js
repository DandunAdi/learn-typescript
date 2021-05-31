import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("Mario", "Create blog", 400);
const invTwo = new Invoice("Luigi", "Create portfolio", 200);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((invoice) => {
    console.log(invoice.format());
});
const me = {
    name: "DDD",
    age: 24,
    speak(text) {
        console.log("Bla bla bla " + text);
    },
};
const greeting = (someone) => {
    someone.speak("I am Batman");
    console.log(`${someone.name} says hello`);
};
greeting(me);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
