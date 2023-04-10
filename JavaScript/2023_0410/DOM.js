// DOM : HTML 문서의 내용을 트리형태로 구조화하여 웹과 프로그래밍 언어를 연결시켜줌
// 각각의 요소와 속성, 콘텐츠를 표현하는 단위를 'Node' 라고 함


// 해당 ID를 가진 요소에 접근

console.log(document.getElementById("text"));
// 해당하는 모든 요소에 접근
console.log(document.getElementsByTagName("p"));
// 해당하는 클래스를 가진 모든 요소에 접근
console.log(document.getElementsByClassName("textClass"));
// // css 선택자로 단일 요소에 접근
// document.querySelector("selector")
// // css 선택자로 여러 요소에 접근
// document.querySelectorAll("selector");

