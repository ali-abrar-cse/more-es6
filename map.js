const numbers = [4,5,23,7,3];
const doubleNum =[];
 for(const number of numbers){
     doubleNum.push(number*2);
 }
//1. loop
//2. called function using number parameter
//3. push it to new array
//  console.log(doubleNum);

//now doubling values using map
const output = numbers.map(x => x*2);
console.log(output);