import { Invoice } from './classes/Invoice.js';
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
let invoices = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (type.value == "invoice") {
        const inv = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        invoices.push(inv);
    }
});
