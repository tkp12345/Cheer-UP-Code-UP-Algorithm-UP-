https: //brunch.co.kr/@swimjiy/12
    // const animal = [ 
    //     { name: 'monkey', size: 'medium', weight: 7},
    //     { name: 'cat', size: 'medium', weight: 5},
    //     { name: 'lion', size: 'small', weight: 23},
    //     { name: 'mouse', size: 'medium', weight: 33},
    //     { name: 'dog', size: 'big', weight: 4},

    // ];

    // console.time();
    // animal.sort((a,b)=>{
    //     //console.log("a와b:",a,b)
    //     let c=String(a).repeat(4).slice(0, 4);
    //     console.log(c);
    //     //return a.name > b.name ? 1: -1;
    // })

    // //console.log(animal);
    // console.timeEnd();


    // 배열의 숫자들을 유니코드 순서가 아닌, 숫자 크기 순서대로 정렬하기 위해서
    // sort() 함수의 파라미터로 함수를 정의하였습니다.
    // 이 함수는 a, b 두 개의 파라미터를 입력받고,
    // a > b이면 1, a == b이면 0, a < b이면 -1을 리턴하여,
    // 주어진 배열을 오름차순으로 정렬하였습니다.

반환 값 < 0: a 가 b보다 앞에 있어야 한다.
반환 값 = 0: a와 b의 순서를 바꾸지 않는다.
반환 값 > 0: b가 a보다 앞에 있어야 한다.


var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

//value 기준으로 정렬 
items.sort((a, b) => {
            if (a.value > b.value) {
                return 1;
            }
        }


        //조건부 정렬
        const studentList = [
            { name: 'kyeongrok', age: 31, math: 85, english: 87 },
            { name: 'jihyun', age: 31, math: 95, english: 97 },
            { name: 'minsup', age: 35, math: 76, english: 84 },
            { name: 'dasom', age: 35, math: 84, english: 73 },
            { name: 'yuna', age: 26, math: 54, english: 67 },
            { name: 'mattheue', age: 29, math: 34, english: 100 },
        ];

        studentList.sort((beforeStudent, nextStudent) => {
            if (beforeStudent.age > nextStudent.age) return 1; //1바꿔
            else if (beforeStudent.age < nextStudent.age) return -1; //-1바꾸지마
            else if (beforeStudent.math > nextStudent.math) return -1;
            else if (beforeStudent.math < nextStudent.math) return 1;
            return 0;
        });

        console.log(studentList);


        /*오름차순으로 코드를 짠다면 아래와 같이 작성할 수있다 */

        const numbers = [10, 3, 8, 4, 1];
        function compare(a,b){
            return a-b; 
        }

        numbers.sort(compare); 

        console.log(numbers); 

        우선 [20, 10, 9,8,7,6,5,4,3,2,1]의 배열에서 a-b라는 연산을 모두 한 다음
그 결과값으로 정렬하는 것이 결코 아닙니다.
뭐하러 굳이 뺄셈을 하고 그 값으로 또 정렬하겠습니까?

자바스크립트의 정확한 알고리즘은 아니지만
쉽게 정렬 알고리즘을 설명하면 이렇습니다.

(a,b) 형식으로 지정한 두 인자를 차례로 비교합니다.

우선 배열 numbers[0]과 numbers[1] 즉, 20과 10을 비교해 볼까요?
20-10 = 10
결과값이 10 즉, 양수입니다.
sort함수에 sortNumber(a,b)의 return 값으로 양수 10을 전달합니다.
그럼 sort함수가 양수값을 전달받고 배열의 순서를 바꾸어 버립니다.
(정확하게 말하면 두 배열 안에 든 값을 교체)
그럼 배열이 [10, 20, 9,8,7,6,5,4,3,2,1] 이렇게 바뀝니다.

그 다음 numbers[0]과 numbers[2] 즉 10과 9를 비교합니다. 10 - 9 = 1 >0, 양수입니다.
결과값이 양수이므로 또 10과 9의 순서를 바꿉니다.
이런 식으로 계속 두 인자를 비교해서 결과값이 양수가 나오면 순서를 바꾸고,
음수가 나오면 순서를 그대로 유지하는 겁니다.

배열이 바뀌어가는 순서를 보면 이해하기 쉽습니다.

[(20), (10), 9,8,7,6,5,4,3,2,1] 20-10 = 10, 즉 양수이므로 순서바뀜! ()는 비교되는 인자값.
[(10), 20, (9),8,7,6,5,4,3,2,1] 10 - 9 = 1 또 양수, 순서 바뀜.
[(9), 20, 10, (8),7,6,5,4,3,2,1] 반복...
[(8), 20, 10, 9,(7)...]
...
[(2). 20, 10...3, (1)]
[(1), 20, 10...]

그럼 배열 내에서 가장 작은 값 1이 찾아지겠죠.

[1, 20, 10, 9,8,7,6,5,4,3,2]

1의 순서는 바뀌지 않습니다. 1-2 = -1
즉 결과값이 음수이기 때문이죠.

그 다음은 두번째 배열 차례입니다.
20 - 10 = 10 > 0 이므로 순서를 또 바꿉니다.

[1, (20), (10), 9,8,7,6,5,4,3,2]
[1, (10), 20, (9), 8...]
[1, (9), 20, 10, (8)...]

이런 식으로 반복하다 보면 두번째로 작은 값 2도 찾게 됩니다.

....
[1, 2, 20, 10, 9,8,7,6,5,4,3]

그럼 다음은 세번째...
이렇게 지루하게 반복하면 결국 정렬이 됩니다.

물론 실제 자바스크립트에서는 비교하는 순서가 다릅니다.
다른 알고리즘을 쓰기 때문이죠.

이렇게 차례차례 비교해 나가면 인간이 이해하기는 쉽지만
연산량이 기하급수적으로 늘어나기 때문에 다른 정렬 알고리즘을 쓰는 것이죠.

실제로는
[20, 10, 9,8,7,6,5,4,3,2,1]
배열의 양쪽 끝부터 비교하고 (20, 1),
그 다음 배열의 가운데 값을 차례로 비교해 나갑니다. (1,6)
디버깅해 보시면 쉽게 아실 수 있을 겁니다
        

        /*아래처럼도 많이 사용한답니다 */

        /*익명함수 방식 */
        numbers.sort(function(a,b){
            return(a-b);
        })

        /*에로우 뻥션*/
        numbers.sort((a,b) => a-b);