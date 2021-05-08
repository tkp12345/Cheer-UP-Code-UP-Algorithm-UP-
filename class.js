//getter and setter 

class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age; 
    }

    set age(value){
        // if(value<0){
        //     throw Error('age...');
        // }
        this._age = value<0 ? 0: value ;
    }
}

const  user1 = new User('Steve', 'job', 10);
console.log(user1.age);