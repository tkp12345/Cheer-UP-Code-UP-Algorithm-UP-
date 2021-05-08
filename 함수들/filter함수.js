const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

const result = words.filter(function(word) {
    return word.length > 6;
});

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


const animal = [
    { name: 'monkey', size: 'medium', weight: 7 },
    { name: 'cat', size: 'medium', weight: 5 },
    { name: 'lion', size: 'small', weight: 23 },
    { name: 'mouse', size: 'medium', weight: 33 },
    { name: 'dog', size: 'big', weight: 4 },

];


const 작은동물들 = animal.filter((ani) => ani.size === 'medium');
console.log(작은동물들);
console.clear();

const fruits = ['Apple', 'Banana', 'Lemon', 'Watermelon'];
const fruitsFilter = fruits.filter(word => word.length > 5);
console.log(fruitsFilter);