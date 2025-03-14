let sum = 0;
for (let i = 1;i <= 100;i++) {
  sum += i;
}
document.getElementById("sum_test_1").textContent = "1부터 100까지의 합:" + sum;
console.log("1부터 100까지의 합:", sum);

sum = 0;
for(let i = 1;i <= 100;i++) {
    if(i % 5 == 0) continue;
    sum += i;
}
document.getElementById("sum_test_2").textContent = "5의 배수를 제외한 1부터 100까지의 합:" + sum;
console.log("5의 배수를 제외한 1부터 100까지의 합:", sum);