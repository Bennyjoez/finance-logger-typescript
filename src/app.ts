import { Invoice } from './classes/Invoice.js'

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const invOne = new Invoice("Benson", "Photos taken on event", 100);

let invoices: Invoice[] = []
invoices.push(invOne)
console.log(invoices);
console.log(invOne.client);


form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
  )
})