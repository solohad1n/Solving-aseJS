//7 kyu - Print a Rectangle Using Asterisks
//https://www.codewars.com/kata/5937ae46377144bb2f000029
//Нарисовать звёздочками прямоугольник 

// Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.
// The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).
// For example, the following call:

// getRectangleString(3, 3);
// Should return the following string:

// ***
// * *
// ***
// End each line of the string (including the last one) with a carriage return-line feed combination.
// Note: You may assume that width and height will always be greater than zero.

//Example:

// describe("Test 3 x 3", function(){
//   var expected = "***\r\n" +
//                  "* *\r\n" +
//                  "***\r\n";
//   Test.assertEquals(getRectangleString(3, 3), expected);                   
// }); 

// Task:

// function getRectangleString(width, height) {
//   return "";
// }

// Solution:

function getRectangleString(width, height) {
  const rn = '\r\n';
  const tb = '*'.repeat(width) + rn;
  const center = (width > 1) ? ('*' + ' '.repeat(width - 2) + '*' + rn).repeat(height - 2) : '';
  return height > 1 ? (tb + center + tb) : tb.repeat(height)
}