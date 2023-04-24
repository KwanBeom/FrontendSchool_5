// AJAX : 비동기적으로 서버와 통신할 수 있는 방법들을 묶어 명명

// 동기적 처리 : 하나의 데이터를 가지고 와 사용하려면 모두 가져와 순서대로 탐색해 사용해야 함
// 비동기적 처리 : 하나의 데이터를 가지고 와 사용하려면 원하는 데이터를 가지고 와 사용할 수 있음

// 1. XMLHttpRequest
// 서버와의 비동기 통신을 가능케 하는 여러 기능들을 가진 자바스크립트 객체

// XHR 객체 생성
const requestObj = new XMLHttpRequest();
requestObj.open("GET", "url주소") // 요청을 초기화, 통신방법과 요청을 발신할 대상의 주소를 서버로 전달
// get : 웹 서버에 데이터를 요청할 때 사용, URL 주소에 데이터를 입력하는 방식, 전달하는 데이터 양 제한 있음
// post : 웹 서버에 데이터를 요청할 때 사용, URL 주소에 데이터 내용이 나타나지 않고, 전달하는 데이터 양 제한 없음


requestObj.onreadystatechange = () => {
    // readystate : 요청을 보내는 클라이언트의 상태
    // readystate의 종류
    // 0 (UNSENT) - XHR 객체가 생성되었지만 아직 초기화 되지 않음
    // 1 (OPENED) - open() 함수가 호출되어 요청이 초기화
    // 2 (HEADERS_RECEIVED) - sned() 함수가 호출됨
    // 3 (LOADING) - 데이터를 다운 받는 중
    // 4 (DONE) - 통신 완료
    if(requestObj.readyState === 4 && requestObj.status === 200){
        const result = requestObj.responseText;
    }
}
// send() 메서드 이해 필요
requestObj.send() // 서버로 요청을 보냄, send() 메서드가 실행되야만 위에서 설정한 내용들이 의미를 가짐
requestObj.status() // 서버의 전송 상태를 나타냄 200:정상적으로 전송 완료