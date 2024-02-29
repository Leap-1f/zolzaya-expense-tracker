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

const arr = [10, 2, "hello", "jho"];
let number = 0;

arr.map((el) => {
if (typeof el === "number") {
    number = number+ el;  
};
});
console.log(number); 

