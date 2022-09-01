class Support{
    name;
    //attributes
    address = 'BD'
    role = 'support web Dev';
    constructor(name){
        this.name = name;
    }
    //methods
    startSession(){
        console.log(this.name, 'strated a meeting');
    }
}

const amir = new Support('Amir Khan')
amir.startSession();
console.log(amir);
