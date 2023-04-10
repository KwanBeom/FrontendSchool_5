// window 객체
window.open(); // 새로운 창 열기
window.close() // open()
// Location 객체
location.href // 현재 문서의 전체 URL 주소를 문자열로 반환
location.hostname // 현재 문서의 인터넷 호스트 이름을 반환
location.pathname // 현재 문서의 파일 경로명을 반환
location.assign("./filename.html") // 브라우저 창에 지정된 URL 주소에 존재하는 문서를 불러옴
location.replace("./filename.html") // assign과 비슷하지만 현재 문서를 브라우저 히스토리에서 제거하고 불러옴
// History 객체
history.length // 브라우저 히스토리 목록의 갯수를 반환
history.go(-1) // 인수로 전달받는 정수만큼 히스토리 이동
history.back() // 히스토리 목록에서 바로 이전 URL로 이동
history.forward() // 히스토리 목록에서 다음 URL로 이동
// Screen 객체
screen.width // 모니터 화면의 너비를 px 단위 반환
screen.height // 모니터 화면의 높이를 px 단위 반환
window.outerWidth // 현재 브라우저의 너비를 px 단위 반환
window.outerHeight // 현재 브라우저의 높이를 px 단위 반환
screen.availWidth // 실제 사용할 수 있는 화면의 크기를 px 단위 반환
screen.availHeight // 실제 사용할 수 있는 화면의 높이를 px 단위 반환

screen.colorDepth // 사용자 화면에서 한 색상당 사용할 수 있는 비트 수를 반환
screen.pixelDepth // 사용자 화면에서 픽셀당 표시할 수 있는 비트 수를 반환
// 대부분 컴퓨터에서 colorDepth와 pixelDepth는 같은 값을 가짐

// Navigator 객체
navigator.language // 현재 사용중인 브라우저의 기본 언어 설정을 반환
navigator.cookieEnabled // 현재 사용중인 브라우저가 쿠키를 사용할 수 있는지 검사하는 비표준 프로퍼티

// 대화 상자
alert(); // 경고창 표시
confirm(); // 예 아니요를 boolean으로 반환해주는 경고창 표시
prompt(); // 텍스트 입력 창 생성

// 타이머
window.setTimeout(호출할함수, 지연시간) // 명시된 시간(밀리초 단위)이 지난 후에 함수를 호출
window.setInterval(호출할함수, 지연시간) // 지정된 시간(밀리초 단위)간격마다 함수를 반복해서 호출
window.clearTimeout(timeoutID) // setTimeout() 메소드의 반환값을 clearTimeout 메소드의 인수로 전달하면 함수의 호출을 취소할 수 있음
window.clearInterval(timeoutID) // setInterval() 메소드의 반환값을 clearInterval() 메소드의 인수로 전달하면 반복되는 함수의 호출을 취소할 수있음