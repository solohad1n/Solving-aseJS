//8 kyu - Get the mean of an array
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d
//К нам приходит целое число и мы должны вернуть последовательность чисел в обратном порядке.

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//Example:

// assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);

// Task:

const reverseSeq = n => {
  return [];
};

// Solution:

const reverseSeq = n => {
  const arr = []
  for (let i = n; i > 0; i--) {
    arr.push(i)
  }
  return arr;
};
