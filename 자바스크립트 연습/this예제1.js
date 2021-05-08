var test = 'This is test';
console.log(window.test);

var sayFoo = function(){
    console.log(this.test);
    };
sayFoo();
