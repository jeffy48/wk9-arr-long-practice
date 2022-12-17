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
    for (let j = 0; j < arr.length; j++) {
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

// const arr = [8, 1, 2, 2, 3];
// console.log(smallerThanCurr(arr)); // => [4,0,1,1,3]

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log('i:', i, 'j:', j);
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

// const arr = [4, 2, 3, 6, 9];
// console.log(twoSum(arr, 10)); // => True

// const arr2 = [4, 2, 3, 6, 9];
// twoSum(arr2, 16); // => False

const secondLargest = arr => {
  let sorted = arr.sort();
  let secondLargest = sorted[sorted.length - 2];
  return secondLargest;
};

// const arr = [4, 2, 3, 6, 8];
// secondLargest(arr); // => 6

const shuffle = (arr) => {
  let res = [];
  let copy = [...arr];
  let random = Math.floor(Math.random() * copy.length);

  for (let i = 0; i < copy.length; i++) {
    // let randomNum = copy[random];
    // console.log(randomNum);
    [copy[i], copy[random]] = [copy[random], copy[i]];
    // res.push(randomNum);
    // copy.splice(random, 1);
  }
  // console.log(random);
  // arr.map(num => res.push(num));
  return copy;
};

const arr = [2, 5, 1, 3, 4, 7];
console.log(shuffle(arr));

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
