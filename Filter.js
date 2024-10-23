function filterArray(arr, condition) {
  return arr.filter(condition);
}


const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, num => num % 2 === 0); // Condition: keep even numbers
console.log(evenNumbers);