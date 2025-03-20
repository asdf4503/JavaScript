//배열 선언
let fruits = ["apple", "banana", "cherry", "grape", "kiwi", "lemon"];
console.log(fruits);

//배열값 수정
fruits[1] = "orange";
console.log(fruits);

//배열 메서드 실습
fruits.push("mango");           //배열 끝에 추가
fruits.unshift("watermelon");   //배열 앞에 추가
console.log(fruits);

fruits.pop();                   //배열 인덱스 마지막 값 제거
fruits.shift();                 //배열 인덱스 처음 값 제거
console.log(fruits);

//모든 문자열 대문자로 변환
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

//'a'가 포함된 값 추출
let fruitsWithA = fruits.filter(fruit => fruit.includes("a"));
console.log(fruitsWithA);

//숫자 배열의 모든 요소의 합 계산
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
