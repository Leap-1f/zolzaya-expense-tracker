import { log } from "console";

let str = "baldan dorj";
let name = str.split('');
console.log(name[1]);


// 1.Calculate the sum of digits of a positive integer number
let num = [-1, 5, -2, 3, 1];
let sum = 0;

for (let i = 0; i < num.length; i++) {
  const element = num[i];
  if (element > 0) {
    sum += element;
  }
}   
  console.log(sum);
// 2. Rotate an array to the left 1 position
let array = [1, 2, 3];

const lastEl = array.shift();
array.push(lastEl);
console.log(array);

// let myArr = array.slice().reverse();
// let number = array.shift();
// console.log(myArr);
// console.log(array, number);



// 3. Tsag minut second ugugdunu. Seconru hurvuulne
// let num = 1, 1, 1;
// for (let a =0; a<number.length; a++){
//    integer += number[a];
//     }
// console.log(integer); 



// const arr = [10, 2, 3, 4, 5, 2, 8, 9];

// let number = 0;
// for (let i = 0; i < arr.length; i++) {
//   number = number + arr[i];
// }
// console.log (number);

// const arrey = [10, 2, 3, 4, 5, 2, 8, 9];

// let numbers = 0;
// for (let i = 0; i < arrey.length; i++) {
//   numbers += arr[i];
// }
// console.log(numbers);

// const arr = [10, 2, 3, 4, 5, 2, 8, 9];
// let number = 0;
// // arr.map()

// arr.map((element) => number = number + element);
// console.log(number);

// const arr = [10, 2, "hello", "jho"];
// let number = 0;

// arr.map((el) => {
// if (typeof el === "number") {
//     number = number+ el;
// };
// });
// console.log(number);

// 1. Double the numbers:
// let numbers = [1, 5, 2, 3, 1];

// const doubleNum = numbers.map((number) => {
//   return number * 2;
// });
// console.log(doubleNum);

// //2.Capitalize all words:

// let uppers = ["baldan"];

// const capitalize = uppers.map((el) => {
//   return el.toUpperCase();
// });
// console.log(capitalize);

// //3. Find the longest word:

// let longest = "nar garnadaa zolboo";
// let longestName = longest.split(" ");
// let theLongest = "";

// const theLongest = longestName.map((el) => {
//   return longestName.length;
// });
// console.log(theLongest);

// for(let i=0; i<longestName.length; i++ ){
//     if (longestName[i].length > theLongest.length ){
//         theLongest = longestName[i];
//     };
// };
// console.log(theLongest);

// 4.Calculate average:
// const arr = [2, 5, 2, 1];
// let sum = 0;
// let getCalculate = 0;


//     for (let i = 0; i < arr.length; i++) {
//    if(sum += arr[i]){
//  getCalculate=sum / arr.length;
//    };
// };

// console.log(getCalculate);

// for (let i = 0; i < arr.length; i++) {
//    if(sum += arr[i]){
//     sum /arr[i];
//    } 
// };

// console.log(sum);


// 5. Reverse a string:
// let nam = "baldan";
// let reverseName = " ";

// for (let i=nam.length -1; i>=0; i-- ){
// reverseName += nam[i] ;
// }
// console.log(reverseName);
