// var foo = new Object();

var foo = { 
    name : 'foo',
    major : 'computer'
}
let a ;
for ( a in foo){
    console.log(a,foo[a])
}

console.log(foo['name']);

console.log(foo)
console.log(typeof foo)