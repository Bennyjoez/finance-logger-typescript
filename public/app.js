import { Invoice } from './classes/Invoice.js';
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const invOne = new Invoice("Benson", "Photos taken on event", 100);
let invoices = [];
invoices.push(invOne);
console.log(invoices);
console.log(invOne.client);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
