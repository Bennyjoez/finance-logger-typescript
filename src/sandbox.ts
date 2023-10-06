// let character = 'Benson Njuguna'
// let age = 30;
// let isBlackBelt = false;
// character = 'Kamau'


// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// }

// console.log(circ(10))

// arrays

// let names = ["benson", "njuguna", "kamau"];
// names[0] = "Jade"

let nam: string;
nam = "Benson";

let names: string[];

names = ["a", "b"]
console.log(names);

// mixed array of numbers and strings
// union types on arrays
let mixed: (string|number)[] = [];

mixed.push(1)

console.log(mixed);

// union types on single primitive data-types
let uid: string|number;
let id: string|number;
let stats: boolean|number;

uid = 1;
uid = "ben"

// types on objects
let person: {
  name: string,
  age: number,
  beltColor: string
};

person = {
  name: "Ben",
  age: 28,
  beltColor: "brown"
}

// any type sets the variable to any different types. These removes the limitations brought by typescript. It is risky 
let age: any = 25;

age = true;
console.log(age);
