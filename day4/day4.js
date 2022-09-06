//------------ check if a key exists in an Object----------//

// function checkKeys() {
//   let user = {
//     name: "muhriddin",
//     age: 18,
//     hobby: "swimming",
//   };
//   let checkKey = "name" in user;

//   if (checkKey) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkKeys());

// -------------Add key value to an Object---------------//

// const person = {
//   name: "husan",
//   age: 12,
// };
// person.hobby = "coding";

// console.log(person);

//--------------- Get Random Item From an Array---------------//

// const items = [1, 2, "khusan", true, false, []];
// const randomItem = Math.floor(Math.random() * items.length);
// console.log(randomItem);

//---------- Remove item from an Array------------//

// const removeItemFromAnArray = (array, index) => {
//   const newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== index) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// };
// console.log(removeItemFromAnArray([1, 2, 3, 4, 5], 3));

// ----------Extract value -------------//

// function extractValue(arr, prop) {
//   let extractedValue = arr.map((item) => item[prop]);

//   return extractedValue;
// }
// const objArr = [
//   { a: 1, b: 2 },
//   { a: 4, b: 5 },
//   { a: 8, b: 9 },
//   { a: 10, b: 5 },
// ];

// const result = extractValue(objArr, "a");
// console.log(result);

// let array = [1, 2, 3, 4, 5, 6];
// function removeItem(arr, index) {
//   if (arr.hasOwnProperty(index)) {
//     return arr.filter((item) => item !== index)
//   } else {
//     return "raqam bu arrayda yo'q";
//   }
// }
// console.log(removeItem(array, 4));

// ---------Compare two arrays-----------//

// let array1 = [1, 2, 3, 4];
// let array2 = [1, 2, 3, 4];
// function compareArr(arr1, arr2) {
//   let result = JSON.stringify(arr1) == JSON.stringify(arr2);
//   if (result) return true;
//   else return false;
// }
// console.log(compareArr(array1, array2));

//---------- Creating an Object using CONSTRUCTOR--------------//

// function player(name, age, height, country) {
//   this._name = name;
//   this._age = age;
//   this._height = height;
//   this._country = country;

//   this.sayName = function () {
//     return `Hello my name is ${this._name} and my age is ${this._age}`;
//   };
// }

// const player1 = new Player("muhriddin", 18, 170, "Uzb");

// console.log(player1);

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 2, 3, 4, 5];
// function compareArr(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return "not equal";
//   } else {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] == arr2[i]) {
//         return "equal";
//       } else {
//         return "teng emas";
//       }
//     }
//   }
// }

// console.log(compareArr(array1, array2));

// function Member(name, lastName, age, country) {
//   this.name = name;
//   this.lastName = lastName;
//   this.age = age;
//   this.country = country;
//   this.defineMember = function () {
//     return `Hey i am ${this.name} ${this.lastName} and i am ${this.age} years old. I'm from ${this.country}.`;
//   };
// }
// const person = new Member("Mukhriddin", "Meliev", 18, "Uzbekistan");
// console.log(person);

// If we are going to make countUp, we should change push() to unshift()
// Forexample   ------>

// function countDown(num) {
//   if (num <= 0) {
//     return [];
//   } else {
//     const countArr = countDown(num - 1);
//     countArr.unshift(num);
//     return countArr;
//   }
// }

// console.log(countDown(10));

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {
//     const numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }

// console.log(rangeOfNumbers(5,10))

// var numArr = [];

// for (var i = 0; i < 3; i++) {
//   numArr.push(i);
// }
// console.log(numArr);
// console.log(i)

// const obj = {
//   prop1: "Hello",
//   prop3: function () {
//     console.log("I am a property dude!");
//   },
// };
// console.log(obj["prop1"])

// function countUp(num) {
//   if (num < 1) {
//     return [];
//   } else {
//     const numbers = countUp(num - 1);
//     numbers.push(num);
//     return numbers;
//   }
// }

// console.log(countUp(10));

// function findEvenOrOdd(num) {
//   if (num % 2 == 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }

//   // return num.filter((item) => (item % 2 == 0 ? "even" : "odd"));
// }
// console.log(findEvenOrOdd(9));

// function convertToInteger(str) {
//   return parseInt(str)
// }
// console.log(convertToInteger('23'))

// function numToStr(num) {
//   return "" + num;
// }

// console.log(numToStr(12))

// function findSmallestInt(arg) {
//   return Math.min(...arg);
// }

// console.log(findSmallestInt([23,42,13,42,12,-95]))

// function makeNegative(num) {
//   // return num > 0 ? -num : num;

//   // if (num > 0) return -num
//   // return num
//   return Math.abs(num) * -1
// }

// function makeNegative(num) {
//   if (num > 0) {
//     return Number("-" + num);
//   } else {
//     return num;
//   }
// }

// console.log(makeNegative(9));

// function highAndLow(numbers) {
//   let nums = numbers.split(' ').join(',')
//   // return Math.max(nums)
// }
// console.log(highAndLow("1 2 3 4 5"));

const findMinNum = (num) => {
  return Math.min(...num);
};

console.log(findMinNum([32, 43, 12, 3, 4, -32]))


