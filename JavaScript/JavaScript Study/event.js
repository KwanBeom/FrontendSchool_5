// event listener
window.onload // HTML 문서가 로드될 때 실행
/* <p onclick=""> HTML 태그에 속성으로 이벤트 리스너를 추가할 수도 있음 */

대상.addEventListener() // 이벤트 리스너 등록
removeEventListener() // 이벤트 리스너 삭제

// 이벤트 호출 순서
// 이벤트의 대상이 되는 객체나 요소에 프로퍼티로 등록한 이벤트 리스너를 가장 먼저 호출
// 그 후 addEventListener() 메소드를 사용하여 등록한 이벤트 리스너를 등록한 순서대로 호출

// 이벤트 전파 : 이벤트가 발생했을 때, 브라우저 이벤트 리스너를 실행시킬 대상 요소를 결정하는 과정
// 이벤트 전파에는 버블링 전파방식, 캡쳐링 전파방식이 있음

// 이벤트 기본 동작의 취소 
target.preventDefault(); // 기본 동작을 취소함

// 이벤트 전파의 취소
stopPropagation() // 이벤트 전파 취소