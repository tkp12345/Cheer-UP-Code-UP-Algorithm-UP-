'use strict'

var myObject ={
    name: 'foo',
    sayName: function(){
        console.log(this.name);
    }
};

var otherObject = { 
    name: 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();