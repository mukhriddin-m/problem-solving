// const users = [
//   { name: "hasan", age: 12, hasCar: false },
//   { name: "husan", age: 14, hasCar: false },
//   { name: "akmal", age: 10, hasCar: false },
//   { name: "anvar", age: 32, hasCar: true },
//   { name: "mark", age: 40, hasCar: true },
// ];

// // const newArr = users.map((user) => {
// //   return { name: user.name };
// // });

// // console.log(newArr);

// const olderThanTwenty = users.filter((user) => {
//   return user.hasCar && user;
// });

// console.log(olderThanTwenty);

// const nums = [23, 42, 13, 12, 87, 5];

// const mapped = nums.map((num) => num + 5);

// console.log(mapped)

// function alternate(n, firstValue, secondValue) {
//   var result = [];

//   for (let i = 0; i < n; i++) {
//     result.push(i % 2 == 0 ? firstValue : secondValue);
//   }

//   return result;
// }

// console.log(alternate(6, "blue", "red"));

// const mergeArrays = (arr1, arr2) => {
//   return arr1
//     .concat(arr2)
//     .sort((a, b) => a - b)
//     .filter((elem, index, array) => array.indexOf(elem) == index);
// };
// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

//--------------filter-------------------//

// const arr = [5, 34, 2, 4, 62, 4, 15, 32, 11, 17, 18];

// const limited = arr.filter((num) => num < 18);

// console.log(limited)

// const names = [
//   "khasan",
//   "mukhriddin",
//   "khushnud",
//   "khusan",
//   "ali",
//   "navro'z",
//   "alimardan",
// ];

// const findSameLetter = names.filter((str) => str.startsWith("k"));

// console.log(findSameLetter);

//------map-------//

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mapped = num.map((x) => x + 2);

// console.log(mapped);

//----------------reduce--------------//

// const nums = [5, 34, 2];

// const multipleAll = nums.reduce((a, b) => a + b);

// console.log(multipleAll);

//----------find---------//

// const array = [3, 10, 5, 2, 5, 19, 101, 203];

// const find = array.find((num) => num > 100);
// const findIndex = array.findIndex((num) => num > 100);

// console.log(findIndex);

// -----------concat-----------//

// const arr1 = ["a", "b"];
// const arr2 = ["c", "d"];
// const arr3 = ["e", "f"];

// const merged = arr1.concat(arr2, arr3).join("");
// console.log(merged);

//   --------some----------//

// const arr = [2, 23, 4, 5, 6, 3, 1, 26];

// const someOfNum = arr.some((num) => num > 30);

// console.log(someOfNum);

//------sort--------//

// const arr = [2, 6, 3, 9, 10, 23, 43, 5, 1];

// const sorted = arr.sort((a, b) => a - b);

// console.log(sorted)

//a-b = smallest to largest
//b-a = largest to smallest

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const merged = arr1.concat(arr2);

// console.log(merged);

// const arr1 = ["a", "b", "c"];

// const arr2 = ["d", "e", "f"];

// const merged = arr1.concat(arr2);

// console.log(merged);

// function reverseWords(str) {
//   return str.split(" ").reverse().join("");
// }

// console.log(reverseWords("my name is hasan"));

// function time() {
//   let date = new Date();
//   let seconds = date.getSeconds();

//   console.log(seconds);
// }

// setInterval(time, 1000);

// console.log(time());

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum == endNum) {
//     return [startNum];
//   } else {
//     const numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }

// console.log(rangeOfNumbers(1, 22));

// class Phone {
//   constructor(model, color, storage, price) {
//     this.model = model;
//     this.color = color;
//     this.storage = storage;
//     this.price = price;
//   }
// }
// const phone = new Phone("Samsung S10 Plus", "Silver", "128 GB", "300 $");
// const phone2 = new Phone("Iphone Xs", "Gold", "256 GB", "700 $");
// console.log(phone);
// console.log(phone2);

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

class Phone {
    constructor(model, color, storage, country, price) {
        this.model = model
        this.color = color
        this.storage = storage
        this.country = country
        this.price = price
    }
}

    const phone = new Phone ("Iphone 13 Pro Max", "Gold", "256 GB", "United States", "999$")

console.log(phone)
    
