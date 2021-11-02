const R = require('ramda');
// Count how many digits there are in the following 
// sentence, using functional composition

// NOTE: If you get stuck, you can get some hints from 
// the following jsbin: 
// https://jsbin.com/jokefus/2/edit?js,console
// my solution is here: https://jsbin.com/duxewec/1/edit?js,console

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

// const numbersInString = // add function composition here

// expect(numbersInString(sentence)).toBe(7);

// console.log('If you see this printed in the console, the test passed!');

//! Online Solution

const getNums = R.match(/[0-9]+/g);
 
//this one returns just the digits. There's no + matching. 
const getDigits = R.match(/[0-9]/g);
 
const numbersInString = R.pipe(getNums, R.length);
const digitsInString = R.pipe(getDigits, R.length);
 
//modified to 4 because a double digit number is just one number
expect(numbersInString(sentence)).toBe(4);
 
//changed to digits to be more specific.
expect(digitsInString(sentence)).toBe(7);