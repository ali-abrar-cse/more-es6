const friends =['Tom Cruise', 'Tom Sulaiman', 'Tom Brady', 'Tom Hanks'];
const fLength = friends.map(x => x.length);
// console.log(fLength);


const products = [
    {name: 'Water Bottle', price: 500, color: 'yellow'},
    {name: 'Phone', price: 15000, color: 'black'},
    {name: 'Smart Watch', price: 1500, color: 'red'},
    {name: 'Water Glass', price: 100, color: 'transparent'}
];

const productName = products.map(x => x.name);
// console.log(productName);\
const myProduct = products.forEach(x => console.log(x));
