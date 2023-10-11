import { Invoice } from './classes/Invoice.js';
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const itemList = document.querySelector(".item-list");
let invoices = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (type.value == "invoice") {
        const inv = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        invoices.push(inv);
    }
    display(invoices);
});
const display = (invoices) => {
    invoices.map((inv) => {
        const li = document.createElement('li');
        const name = document.createElement("span");
        const amount = document.createElement('span');
        name.textContent = inv.client;
        amount.textContent = `${inv.amount}`;
        li.appendChild(name);
        li.appendChild(amount);
        itemList === null || itemList === void 0 ? void 0 : itemList.appendChild(li);
    });
};
