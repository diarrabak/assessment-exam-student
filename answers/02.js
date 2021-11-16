/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function (number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
const median = function (arr) {
  let sortedArr = arr.sort();
  let middleValue = middle(sortedArr);
  if (middleValue.length > 1)
    return round((middleValue[0] + middleValue[1]) / 2);
  return round(middleValue[0]);
};

const middle = function (inputArray) {
  let result = [];
  if (inputArray.length > 2) {
    if (inputArray.length % 2 === 0) {
      //If the array has an even number of element, the middle will be two elements
      let middleElemts = inputArray.slice(
        inputArray.length / 2 - 1,
        inputArray.length / 2 + 1
      );
      result.push(middleElemts[0], middleElemts[1]);
    } else {
      //Only one middle element for odd element number array
      let middleElement = inputArray.slice(
        Math.floor(inputArray.length / 2),
        Math.floor(inputArray.length / 2) + 1
      )[0];
      result.push(middleElement);
    }
  }
  return result;
};

// Don't change below:

module.exports = { median };
