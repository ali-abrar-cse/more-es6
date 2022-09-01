const numbers = [5,12,47,5,13,7,6];
//the numbers greater than 10 will be filtered out
const bigNumber = numbers.filter(x => x>10);
// console.log(bigNumber);

const products = [
    {name: 'water bottle', price: 500, color: 'yellow'},
    {name: 'glass', price: 100, color: 'transparent'},
    {name: 'chair', price: 3500, color: 'black'},
    {name: 'phone', price: 15000, color: 'black'}
];

const blackElement = products.filter(x => x.color == 'black');
const blackElement1 = products.find(x => x.color == 'black');
console.log(blackElement, blackElement1);


