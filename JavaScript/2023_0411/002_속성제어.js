// JS를 사용해 요소의 속성제어
// style 객체 // 이 객체로 사용되면 inline 스타일 가중치로 지정
target.style.color = "red"; // 스타일 정보 변경
target.style.fontWeight = "bold"; // 속성이 없다면 추가
target.style.color = null; // 초기화
// 중간에 '-'로 나눠져 있다면 카멜케이스
// float 속성의 경우 JS의 예약어로 존재하기 때문에 cssFloat으로 사용

target.getAttribute(); // 속성값을 가져옴
target.setAttribute("속성", "변경할 값"); // 속성값을 새로 지정

// data 속성 // 요소에 데이터를 저장하게 도움
// data 속성의 이름에는 콜론(:)이나 영문 대문자가 들어갈 수 없음

// <img class="" src="" data-hp="300" data-name="human">
const person = document.querySelector("img")
console.log(person.dataset.name); // human 반환