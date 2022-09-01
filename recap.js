const hubby = 'Omor Sani';
let phone = 'iphone 16';
//use of backtick
let myNotes = `I am ${hubby}. I have a ${phone}`;
//console.log(myNotes);

// use of three dots
const max = num => Math.max(...num);

const numbers = [14, 15, 30, 11, 2, 25];
const maxValue = max(numbers);
//console.log(maxValue);

//use of arrow function

const squareValue = x => x*x;

console.log(squareValue(5));