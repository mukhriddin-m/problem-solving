//------------ check if a key exists in an Object----------//

// let user = {
//   name: "muhriddin",
//   age: 18,
//   hobby: "swimming",
// };

// let checkKey = "name" in user;
// if (checkKey) {
//   console.log("name is exists");
// } else {
//   console.log("name is not exists");
// }

// -------------Add key value to an Object---------------//

// let person = {
//   name: "muhriddin",
//   age: 18,
// };

// let add = (person["hobby"] = "reading");
// console.log(person);

// ---------Compare two arrays-----------//

let array1 = [1, 3, 5, 8];
let array2 = [1, 3, 5, 8];
function compareArr(arr1, arr2) {
  let arr1Elements = JSON.stringify(arr1);
  let arr2Elements = JSON.stringify(arr2);
  if (arr1Elements == arr2Elements) {
    return true;
  } else {
    return false;
  }
}
console.log(compareArr(array1, array2));

//--------------- Get Random Item From an Array---------------///

// const items = [1, 27, 0, 13, 4, 5, 16, 7, 12, 9];

// const random = Math.floor(Math.random() * items.length)

// console.log(random);

//---------- Remove item from an Array------------//

// shift()

// const nums = [1, 2, 3, 4, 5, 6];

// nums.shift();
// console.log(nums);

// pop()

// const nums = [1, 2, 3, 4, 5, 6];
// nums.pop()

// console.log(nums);

// var items = ["Cola", "Pepsi", "Fanta"];

// items.splice(2, 2, 'coffe');
// console.log(items);

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

// const person = {
//   name: "mukhriddin",
//   age: 18,
//   live: "Uzbekistan",
// };
// let add = (person["hobby"] = "reading");
// console.log(person);

// const user = {
//   name: "mukhriddin",
//   age: 18,
//   color: "white",
// };

// let add = (user["hair"] = "black")
// console.log(user)
// let array1 = [1, 2, 3, 4];
// let array2 = [1, 2, 3, 4];
// function compareArr(arr1, arr2) {
//   let result = false;
//   if (arr1.length == arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       } else {
//         result = true;
//       }
//     }
//     return result;
//   } else {
//     return false;
//   }
// }
// console.log(compareArr(array1, array2));
