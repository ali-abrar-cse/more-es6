class TeamMember{
    name;
    //attributes
    address = 'BD'
    role = 'support web Dev';
    constructor(name){
        this.name = name;
    }
}
class Support extends TeamMember{
    //methods
    startSession(){
        console.log(this.name, 'strated a meeting');
    }
}

class StudentCare extends TeamMember{
    constructor(name, editor){
        super(name);
        this.editor = editor;
    }
    buildARoutin(student){
        console.log(this.name, 'made a routin for', student);
    }
}



const amir = new Support('Amir Khan')
amir.startSession();
// console.log(amir);

const sabbir = new StudentCare('sabbir', 'Sabbir');
sabbir.buildARoutin('riya')