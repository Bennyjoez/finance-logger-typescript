import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/payments.js';

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const itemList = document.querySelector(".item-list")

let invoices: Invoice[] = []
let payments: Payment[] = []

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  if (type.value == "invoice") {
    const inv = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    invoices.push(inv);
    displayInvoices(invoices)
  } else if(type.value == "payment") {
    const payment = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    // payments.push(payment)
    displayPayment(payment)
  }
})

const displayInvoices = (invoices: Invoice[]) => {
  invoices.map((inv) => {
    const li = document.createElement('li');
    const name = document.createElement("span")
    const amount = document.createElement('span')
    name.textContent = inv.client
    amount.textContent = `${inv.amount}`

    li.appendChild(name)
    li.appendChild(amount)
    itemList?.appendChild(li);
  })
}

const displayPayment = (payment: Payment) => {
  const li = document.createElement('li');
  const name = document.createElement("span")
  const amount = document.createElement('span')
  name.textContent = payment.client
  amount.textContent = `${payment.amount}`

  li.appendChild(name)
  li.appendChild(amount)
  itemList?.appendChild(li);
}