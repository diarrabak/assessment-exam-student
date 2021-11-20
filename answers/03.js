/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function (arr) {
  const values = uniContent(arr); //Unique numbers of the array
  const modes = []; //All the modes
  for (let i = 0; i < values.length; i++) {
    for (let value of arr) {
      if (value === values[i]) {
        //Loop on the input array and compare all elements to each unique value record the occurrence
        if (modes[i]) {
          //If mode not empty
          modes[i] += 1; //increment
        } else {
          modes[i] = 1; //Otherwise set to 1
        }
      }
    }
  }

  return values[modes.indexOf(Math.max.apply(null, modes))];
  // return modes;
};

//Find the different numbers forming the arrays without duplicates
const uniContent = function (array) {
  const occurences = [];
  for (let element of array) {
    //Loop on input array
    if (occurences.indexOf(element) < 0) {
      //Add the current element only if it doesn't exist in occurrences (only once)
      occurences.push(element);
    }
  }
  return occurences;
};
// console.log(mode([6, 2, 3, 4, 2, 9, 2,6, 1, 0, 5]));
// Don't change below:

module.exports = { mode };
