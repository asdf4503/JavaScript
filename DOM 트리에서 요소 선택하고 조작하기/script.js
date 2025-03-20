// DOM 요소 선택
const header = document.getElementById("header");
const paragraphs = document.querySelectorAll(".text");
const button = document.getElementById("changeButton");

// header 요소 조작: 텍스트와 스타일 변경
header.textContent = "자바스크립트를 이용한 DOM 조작";
header.style.color = "green";

// 모든 문단 요소에 highlight 클래스를 추가하여 배경색 변경
paragraphs.forEach((p) => {
    p.classList.add("highlight");
});

// 버튼 클릭 시 각 문단의 텍스트를 변경하는 이벤트 핸들러 추가
button.addEventListener("click", () => {
    paragraphs.forEach((p, index) => {
    p.textContent = `${index + 1}번째 문단 내용이 변경되었습니다.`;
    p.classList.add("chagehighlight");
    });
});