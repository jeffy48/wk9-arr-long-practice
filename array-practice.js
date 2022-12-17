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
  let res = arr.filter(word => word.length % 2 === 0);

  // if (arr[i].length % 2 === 0) {
  //   console.log(arr[i])
  //   return true;
  // }
  return res.length;
};

// const arr = ['ab', 'abc', 'a', 'abcd'];
// console.log(evenNumOfChars(arr)); // => 2

const smallerThanCurr = arr => {
  let res = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log('counter: ', counter)
    for (let j = i + 1; j < arr.length; j++) {
      //console.log('i: ', i, 'j: ', j);
      if (arr[j] < arr[i]) {
        counter += 1;
      }
    }
    res.push(counter);
    counter = 0;
  }
  return res;
};

const arr = [8, 1, 2, 2, 3];
console.log(smallerThanCurr(arr)); // => [4,0,1,1,3]

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
