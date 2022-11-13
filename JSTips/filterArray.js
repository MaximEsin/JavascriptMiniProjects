//const filter = (numbers, greaterThan) => {
// let result = [];
// for (const number of numbers) {
// if (number > greaterThan) {
//   result.push(number);
//   }
//  }
//  return result;
//};
//console.log(filter([1, 4, 7, 4, 5, 2, 7, 9], 3));

//filter loops and returns an array with matching conditions

const nums = [1, 2, 3, 4, 5, 6];
let result = nums.filter((num) => num > 7 || num < 4);
console.log(result);
