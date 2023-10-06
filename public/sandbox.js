"use strict";
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
let nam;
nam = "Benson";
let names;
names = ["a", "b"];
console.log(names);
// mixed array of numbers and strings
// union types on arrays
let mixed = [];
mixed.push(1);
console.log(mixed);
// union types on single primitive data-types
let uid;
let id;
let stats;
uid = 1;
uid = "ben";
// types on objects
let person;
person = {
    name: "Ben",
    age: 28,
    beltColor: "brown"
};
// any type sets the variable to any different types. These removes the limitations brought by typescript. It is risky 
let age = 25;
age = true;
console.log(age);
