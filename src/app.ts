import { Invoice } from './classes/Invoice.js'

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const itemList = document.querySelector(".item-list")

let invoices: Invoice[] = []

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  if (type.value == "invoice") {
    const inv = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    invoices.push(inv);
  }
  display(invoices)
})

const display = (invoices: Invoice[]) => {
  invoices.map((inv) => {
    const li = document.createElement('li');
    const name = document.createElement("span")
    const amount = document.createElement('span')
    name.textContent = inv.client
    amount.textContent = `${inv.amount}`

    li.textContent = inv.client
    itemList?.appendChild(li);
  })
}