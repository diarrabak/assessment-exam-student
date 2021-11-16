/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function (number) {
  return Math.round(number * 100) / 100;
};
//This function counts the number of element in the array
const count = function (arr) {
  return arr.length;
};

//This function calculates the sum of elements of the array
const sum = function (arr) {
  let result = 0;
  for (var value of arr) {
    result += value;
  }
  return result;
};

//This function determines the mean value of the array
const mean = function (arr) {
  if (count(arr) < 1) return null;
  return round(sum(arr) / count(arr));
};

////This function determines the standard deviation of the array
const stdev = function (arr) {
  let arrMean = mean(arr);
  let arrayDiff = substractFromArray(arr, arrMean); //Square value of the difference between array element and the mean value
  let sumSquared = sum(arrayDiff); //Sum of the squared arrays
  return round(Math.sqrt(sumSquared / count(arr)));
};

const substractFromArray = function (array, value) {
  let result = [];
  for (var element of array) {
    result.push((element - value) ** 2);
  }
  return result;
};
// Don't change below:
module.exports = { stdev };
