function extractOddNumbers(array) {
  let oddNumbers = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 === 0) {
      oddNumbers.add(element);
    }
  }
  return oddNumbers;
}

console.log(extractOddNumbers([])); // []
console.log(extractOddNumbers([1])); // []
console.log(extractOddNumbers([1, 4, 3])); // [4]
console.log(extractOddNumbers([2, 2, 7, 11, 18])); // [2, 2, 18]
console.log(extractOddNumbers([6])); // [6]