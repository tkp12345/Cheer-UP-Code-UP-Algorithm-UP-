// /* for in 과 for of 의 차이 
// https://dydals5678.tistory.com/66
// 배열 원소 지우기 : https://dgkim5360.tistory.com/entry/deleting-an-item-in-array-javascript
// indexof란 ? : https://yeolco.tistory.com/157
//  */

// /*
// 지우고 싶은 원소의 인덱스를 찾아서 splice 함수를 통해서 지운다.

// let a = [1, 2, 3, 4]
// const idx = a.indexOf(3) 
// if (idx > -1) a.splice(idx, 1)


// */

// /*

// var arr = [ "사과", "딸기", "복숭아 ];
// var arr2 = [ 5, 3, 0.5, 7, 2, 9];


// console.log(arr.indexOf("복숭아")); // 2 출력

// console.log(arr2.indexOf(5)); // 0 출력

// */

// let i = 0;

// // function solution(participant, completion) {
// //     for (let part of participant) {
// //         i++
// //         console.log(i, "번쨰part:", part);

// //         for (let comp of completion) {
// //             if (part == comp) {
// //                 console.log(i, "번쨰comp:", comp);
// //                 const idx = participant.indexOf(part);
// //                 console.log("idx:", idx);
// //                 if (idx > -1) {
// //                     participant.splice(idx, 1);
// //                 }
// //             }
// //         }

// //     }
// //     console.log(participant)

// // }

// function solution(participant, completion) {
//     for (let i = 0; i < participant.length; i++) {
//         //console.log("i의값:", i);
//         for (let j = 0; j < completion.length; j++) {
//             if (participant[i] == completion[j]) {
//                 //  console.log("i의값:", i, "j의값:", j);
//                 //  console.log(i, "번쨰comp:", participant[i]);
//                 //  console.log(j, "번쨰comp:", completion[j]);
//                 if (i > -1) {
//                     participant.splice(i, 1);
//                     console.log(participant);
//                 }
//             }
//         }
//     }
//     console.log(participant)
// }
// solution(["leo", "kiki", "eden"], ["eden", "kiki"]);

// //지식in

// let arr = [1, 2, 3];
// for (let x = arr.length - 1; x > -1; x--) {

// }

// for (let x = participant.length - 1; i > -1; i--) {
//     for (let j = completion.length - 1; j > -1 j--) {
//         if (participant[i] === completion[j])
//             participant.splice(i, 1);
//     }
// }


// function solution(participant, completion) {
//     completion.forEach((item) => {
//         for (let i = this.length - 1; i > -1; i--) {
//             console.log("item", item)
//             if (this[i] === item) this.splice(i, 1);
//         }
//     }, participant);
// }

// function solution(participant, completion) {
//     completion.forEach(function(item) {
//         for (let i = this.length - 1; i > -1; i--) {
//             if (this[i] === item) this.splice(i, 1);
//         }
//     }, participant);

//     console.log(participant);
// }



function solution(participant, completion) {
    for (let i = participant.length - 1; i > -1; i--) {
        if (-1 < completion.indexOf(participant[i]))
            console.log(participant[i]);
        participant.splice(i, 1);
    }
}

solution(["leo", "eden", "kiki"], ["eden", "kiki"]);