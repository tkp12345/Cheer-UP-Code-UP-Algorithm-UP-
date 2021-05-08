// const fruits = ['a','b','c'];
// const result = fruits.join();
// const result2 = fruits.join('');

// console.log(result);
// console.log(result2);

// const fruits = 'a,b,c';
// const result =fruits.split(',');
// console.log(result);


// const array =[1,2,3,4,5];
// const result = array.splice(0,2);
// console.log(result);

class Students {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Students('A', 29, true, 45),
    new Students('B', 28, false, 85),
    new Students('C', 30, true, 90),
    new Students('D', 40, false, 66),
    new Students('E', 18, true, 88),
];

//90점이상인학생 

//내답
// for(var i in students){

// if(students[i].score>=90){
//     console.log(Number(i)+Number(1)+"번쨰학생");
// }
// }
//정답
// { 
//     const result = students.find((students)=>student.score===90);
            //function (student){ return student.score ===90;} (students)=>student.score===90;
// }

//등록한 학생들을 배열로 만들어라 

//내답
// var arr=[];
// for (var i in students) {
//     if (students[i].enrolled === true) {
       
//         arr.push(students[i].name);
//     }
   
// }
// console.log(arr);

//원하는걸 받아올땐 filter()

//90점학생 찾아 
{
    const result = students.find(function(students){
        return students.score === 90;
    });
    console.log(result);
}

{
    const result = students.find((students)=>students.score === 90);
    console.log(result);
}

// //수업 등록학생 
// {
//     const result = students.filter((students)=>students.enrolled);
//     console.log(result);
// }

//점수 배열 
// {
//     //매핑 - 원소 내마음대로
//     const result = students.map((students)=> students.score);
//     console.log(result);
// }

//50미만 학생이있는가 t/f  ? 
{
    const result = students.find((students)=>students.score <50);
    console.log(result);
}