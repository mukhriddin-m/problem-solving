// celcius to farenheit
// JavaScript Program to Find the Largest Among Three Numbers
// JavaScript Program to Find the Factorial of a Number
//  JavaScript Program to Print the Fibonacci Sequence
// JavaScript Program to Remove Duplicates From Array
// JavaScript Program to Validate An Email Address
// JavaScript Program to Convert Date to Number
// JavaScript Program to Convert Kilometers to Miles
// JavaScript Program to Check Armstrong Number
// JavaScript Program to Replace Characters of a String

// -----------------ANS-----------//

// function findLargest(num1, num2, num3) {
//   let largest;
//   if (num1 > num2 && num1 > num3) {
//     largest = num1;
//   } else if (num2 > num1 && num2 > num3) {
//     largest = num2;
//   } else {
//     largest = num3;
//   }
//   return largest;
// }
// console.log(findLargest(43, 76, 12)

// function convertCtoF(celcius) {
//   //   let farenheit = celcius * (9 / 5) + 32;
//   let farenheit = celcius * 1.8 + 32;
//   return farenheit;
// }
// console.log(convertCtoF(100));

//---------- FACTORIALIZE-----------------

// function factorialize(num) {
//   let output = 1;
//   for (let i = 1; i <= num; i++) {
//     output = output * i;
//   }
//   return output;
// }

// function factorialzie(num) {
//   // if (num == 0 || num === 1) {
//   //   return 1;
//   // } else {
//   //   return num * factorialzie(num - 1);
//   // }

//   // let result = num;
//   // if (num == 0 || num == 1) {
//   //   return 1;
//   // }
//   // while (num > 1) {
//   //   num--;
//   //   result = result * num;
//   // }
//   // return result;
// }
// console.log(factorialzie(5));

// function checkArmstrong(num) {
//   let sum = 0;
//   let temp = num;
//   let remainder;
//   while (temp > 0) {
//     remainder = temp % 10;
//     sum = sum + remainder ** 3;
//     temp = parseInt(temp / 10);
//   }
//   if (sum == num) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkArmstrong(153));


//153   OUTPUT


//   (1*1*1) + (5*5*5) + (3*3*3)
//    153 = 3*3*3 + 5*5*5 + 1*1*1

//       CONVERT DATE TO NUMBER

// function convertDateToNum() {
//   const date = new Date().getTime();
//   return date;
// }
// console.log(convertDateToNum());

//          Remove Duplicate from Array

// function removeDuplicate(arr) {
//   let b = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (b.indexOf(arr[i]) === -1) {
//       b.push(arr[i]);
//     }
//   }
//   return b;
// }
// console.log(removeDuplicate([2, 55, 2, 4]));
// //output = [1,3,2,4]

// function replaceWords(str) {
//   return str.replace("hello", "hi");
// }
// console.log(replaceWords("hello my name is khasan"));

