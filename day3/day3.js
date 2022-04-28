// Javascript Program to Check if a number is Positive, Negative, or Zero✅
// JavaScript Program to Check Prime Number ✅
// JavaScript Program to Create Objects in Different Ways ✅
// JavaScript Program to Remove a Property from an Object ✅
// JavaScript Program to Clone a JS Object
// JavaScript Program to Loop Through an Object ✅
// JavaScript Program to Merge Property of Two Objects✅
// JavaScript Program to Convert Objects to Strings

//          1

// function findCher(a) {
//     if (a < 0) {
//         return "Negative"
//     } else if (a > 0) {
//         return "Positive"
//     } else {
//         return "Zero"
//     }
// }
// console.log(findCher(2))

// var person = {
//   pname: "khasan",
//   gander: "male",
//   age: 13,
//   live: "Samarkand",
// };
// function callPerson() {
//   let player = { ...person };
//   return player;
// }
// console.log(callPerson());

// function callPerson() {
//   let person = {
//     name: "mukhriddin",
//     age: 18,
//     live: "Uzb",
//     hair: "black",
//     };
//     return person.
// }
// console.log(callPerson())

// const player = {
//   name: "khusan",
//   age: 13,
//   hair: "black",
// };

// delete player.hair

// console.log(player)

// const obj1 = {
//   name: "khusan",
//   age: 13,
// };

// const obj2 = {
//   leg: 4,
// };

// const merge = {...obj1, ...obj2};

// // const merge = Object.assign(obj1, obj2);

// console.log(merge);

// function checkPrime(num) {
//   let isPrime = true;
//   if (num === 1) {
//     // console.log("1 neither");
//     return `${num} 1 neither`;
//   } else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       //   console.log("prime number");
//       return `${num} is prime number`;
//     } else {
//       //   console.log("not prime number");
//       return `${num} is not prime number`;
//     }
//   } else {
//     console.log("nothing to compare");
//   }
// }

// console.log(checkPrime(6));

// const member = {
//   name: "mukhriddin",
//   age: 18,
//   hobbies: ["reading", "swimming", "codeing"],
// };
// for (let key in member) {
//   let value;
//   value = member[key];
//   console.log(key + " - " + value);
// }

// ---------------convert Objects to String----------------//

// const obj = {
//   name: "mukhriddin",
//   age: 18,
//   hair: "black",
// };
// const jsonData = JSON.stringify(obj);
// console.log(jsonData)

let person = {
  name: "khusan",
  age: 13,
};

let person2 = Object.assign(person);

console.log(person);
console.log(person2);
