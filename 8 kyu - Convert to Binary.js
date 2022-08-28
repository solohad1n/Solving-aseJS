//8 kyu - Convert to Binary
//https://www.codewars.com/kata/59fca81a5712f9fa4700159a
//Функция которая возвращает число в двоичном формате

// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

//Example:

// assert.strictEqual(toBinary(1), 1);
// assert.strictEqual(toBinary(2), 10);
// assert.strictEqual(toBinary(3), 11);
// assert.strictEqual(toBinary(5), 101);

// Task:

// function toBinary(n) {
//   return n;
// }

// Solution:

function toBinary(n) {
  return +n.toString(2)
}