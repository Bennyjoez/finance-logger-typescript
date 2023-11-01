import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/payments.js';
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const itemList = document.querySelector(".item-list");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (type.value == "invoice") {
        const inv = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        displayInvoices(inv);
    }
    else if (type.value == "payment") {
        const payment = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        displayPayment(payment);
    }
});
const displayInvoices = (inv) => {
    const li = document.createElement('li');
    const name = document.createElement("span");
    const amount = document.createElement('span');
    name.textContent = inv.client;
    amount.textContent = `${inv.amount}`;
    li.appendChild(name);
    li.appendChild(amount);
    itemList === null || itemList === void 0 ? void 0 : itemList.appendChild(li);
};
const displayPayment = (payment) => {
    const li = document.createElement('li');
    const name = document.createElement("span");
    const amount = document.createElement('span');
    name.textContent = payment.client;
    amount.textContent = `${payment.amount}`;
    li.appendChild(name);
    li.appendChild(amount);
    itemList === null || itemList === void 0 ? void 0 : itemList.appendChild(li);
};
