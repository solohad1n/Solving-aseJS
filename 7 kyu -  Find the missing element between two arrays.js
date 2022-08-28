//7 kyu - Find the missing element between two arrays
//https://www.codewars.com/kata/5a5915b8d39ec5aa18000030
//Найти пропущенный элемент между 2 массивов

// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8

//Example:

// Test.assertEquals(findMissing([1, 2, 3], [1, 3]), 2);
// Test.assertEquals(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), 8);
// Test.assertEquals(findMissing([7], []), 7);
// Test.assertEquals(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]), 3);
// Test.assertEquals(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]), 0);

// Task:

// function findMissing(arr1, arr2) {
//   // Your solution here
// }

// Solution:

function findMissing(arr1, arr2) {
  let index;
  for (let i = 0; i < arr1.length; i++) {
    index = arr2.indexOf(arr1[i])
    if (index > -1) {
      arr2.splice(index, 1)
    } else {
      return arr1[i]
    }
  }
}