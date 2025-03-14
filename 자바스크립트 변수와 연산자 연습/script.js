const num1 = 10;
const num2 = 20;
console.log('num1 : ', num1);
console.log('num2 : ', num2);

let val_plus = num1 + num2;
let val_minus = num1 - num2;
let val_multiply = num1 * num2;
let val_division = num1 / num2;
let val_mod = num1 % num2;

console.log('num1 + num2 = ', val_plus);
console.log('num1 - num2 = ', val_minus);
console.log('num1 * num2 = ', val_multiply);
console.log('num1 / num2 = ', val_division);
console.log('num1 % num2 = ', val_mod);

//연산자 산술, 문자열, 증감, 대입, 논리, 비교
//Math / PI(파이), round(반올림), ceil(올림), floor(내림), abs(절댓값), min(최솟값), max(최댓값)
let val_pi = Math.PI;
let val_round = Math.round(2.6, 1);
let val_ceil = Math.ceil(2.1, 1);
let val_floor = Math.floor(2.8, 1);
let val_abs = Math.abs(-23);
let val_min = Math.min(1, 2, 3 ,4, 5);
let val_max = Math.max(1, 2, 3 ,4, 5);

console.log('PI : ', val_pi);
console.log('round(2.6, 1) ', val_round);
console.log('ceil(2.1, 1)', val_ceil);
console.log('floor(2.8, 1)', val_floor);
console.log('abs(-23)', val_abs);
console.log('min(1, 2, 3 ,4, 5)', val_min);
console.log('max(1, 2, 3 ,4, 5)', val_max);