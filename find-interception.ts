/**
 * Find Intersection
 * Have the function FindIntersection(strArr) read the array of strings stored in strArr
 * which will contain 2 elements:
 * the first element will represent a list of comma-separated numbers sorted in ascending order,
 * the second element will represent a second list of comma-separated numbers (also sorted).
 * Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr 
 * in sorted order. If there is no intersection, return the string false.
 */
function FindIntersection(strArr: string[]) {
  let firstArray = strArr[0].split(",");
  let secondArray = strArr[1].split(",");
  let commonNumbers = [];

  let e = 0;
  for (var i = 0; i < firstArray.length; i++) {
    let currentNumber: any = parseInt(firstArray[i]);
    for ( ; e < secondArray.length; e++) {
      const secondNumber: any = parseInt(secondArray[e]);
      if (currentNumber === secondNumber) {
        commonNumbers.push(currentNumber);
      }
      if (secondNumber > currentNumber)
      {
        break;
      }
    }
  }
  if (commonNumbers.length === 0) {
    return false;
  }

  return commonNumbers.toString();
}

// keep this function call here
// ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// ["1, 2, 10, 11", "10"]
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

