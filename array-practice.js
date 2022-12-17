const findMinimum = arr => {
  let smallest = Infinity;

  if (arr.length === 0) {
    return undefined;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
};

const runningSum = arr => {
  let res = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    sum += num;
    res.push(sum);
  }

  return res;
};

const evenNumOfChars = arr => {

  // Your code here
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
