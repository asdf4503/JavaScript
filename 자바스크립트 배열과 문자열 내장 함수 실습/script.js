//랜덤 정수 10개 생성 후 배열에 저장
const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log("랜덤 숫자 배열:", randomNumbers);
document.getElementById("random_array").textContent = "랜덤 숫자 배열: " +  randomNumbers;

//랜덤 정수 배열의 합계 계산
const sum = randomNumbers.reduce((acc, curr) => acc + curr, 0);
console.log("합계:", sum);
document.getElementById("array_sum").textContent = "합계: " + sum;

//평균 계산
const avg = sum / randomNumbers.length;
console.log("평균:", avg);
document.getElementById("array_avg").textContent = "평균: " + avg;

const sampleString = "Hello JavaScript String Functions!";
document.getElementById("string").textContent = "문자열: " + sampleString;

//문자열을 모두 대문자로 변환 | 대문자 변환 함수 toUpperCase()
const upperCaseString = sampleString.toUpperCase();
console.log("대문자 문자열:", upperCaseString);
document.getElementById("upper").textContent = "대문자 문자열" + upperCaseString;

//문자열을 모두 소문자로 변환 | 대문자 변환 함수 toLowerCase()
const lowerCaseString = sampleString.toLowerCase();
console.log("소문자 문자열:", lowerCaseString);
document.getElementById("lower").textContent = "소문자 문자열" + lowerCaseString;

//특정 문자열 포함 여부 체크 | 특정 문자열 포함 여부 확인 함수 includes()
const containsJavaScript = sampleString.includes("JavaScript");
console.log("문자열에 'JavaScript' 포함 여부:", containsJavaScript);
document.getElementById("include").textContent = "문자열에 'JavaScript' 포함 여부: " + containsJavaScript;

//문자열에서 부분 문자열 추출 | 찾고자 하는 문자열 index 반환, slice() 특정 위치의 문자열 반환
const start = sampleString.indexOf("JavaScript");
const extractedString = sampleString.slice(start, start + "JavaScript".length);
console.log("추출된 문자열:", extractedString);
document.getElementById("slice").textContent = "추출된 문자열: " + extractedString;

//문자열을 공백 기준으로 단어 배열로 변환 | split() 구분자로 문자열을 자른 후 배열에 저장
const wordsArray = sampleString.split(" ");
console.log("단어 배열:", wordsArray);
document.getElementById("split").textContent = "단어 배열: " + wordsArray;

//아래는 몰라서 찾아본 내용 !!
/*
String 객체
문자열을 표현할 때 사용하는 객체
String 객체의 속성
length : 문자열의 길이를 표시

String 객체의 메소드
charAt(position) : 해당 인덱스 문자 반환

charCodeAt(position) : 해당 인덱스 문자를 유니코드로 반환

concat(args) : 매개변수로 입력한 문자열을 결합

indexOf(searchString, position) : 앞에서부터 일치하는 문자열의 인덱스 반환

lastIndexOf(searchString, position) : 뒤에서부터 일치하는 문자열의 인덱스 반환

match(regExp) : 문자열 안에 regExp가 있는지 확인

replace(regExp, replacement) : 문자열 안의 regExp를 replacement로 바꾼 뒤 리턴

search(regExp) : regExp와 일치하는 문자열의 위치 반환

slice(start, end) : 특정 위치의 문자열을 반환

split(separator, limit) : separator로 문자열을 자른 후 배열로 반환

substr(start, count) : start부터 count까지 문자열을 잘라서 반환

substring(start, end) : start부터 end까지 문자열을 잘라서 반환

toLowerCase() : 문자열을 소문자로 바꾸어 반환

toUpperCase() : 문자열을 대문자로 바꾸어 반환
*/