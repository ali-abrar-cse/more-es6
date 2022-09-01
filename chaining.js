//declare variable based on the name of an objects property

const number = {
    a: 20,
    b: 35,
    c: 40,
    d: 50
}
const {a,b,c,d} = number;

// console.log(a,c);

//array destructuring
const numbers = [15, 12, 1, 52, 32];
const [ p,q ] = numbers;
// console.log(p,q);

const {sky,fruit} = { sky: 'blue', food: 'polao', fruit: 'mango' }
// console.log(sky,fruit);

const myProperty = {
    car: {
        pajero: 4,
        hiace: 6
    },
    house: 'duplex',
    phone: {
        oppo:{
            oppoReno: 3,
            oppA57: 1
        },
        xiaomi: 2
    }
}

// console.log(myProperty?.phone?.opp?.oppoReno);                           