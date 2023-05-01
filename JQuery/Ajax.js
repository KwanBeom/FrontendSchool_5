// - url : 요청보낼 URL
// - method : http 메소드 - GET, POST, PUT
// - data : 함께 전송할 데이터
// - dataType: 서버 응답 데이터 타입
// - done() : 요청에 대한 응답이 온 후 실행할 함수
// - fail() : 요청이 실패 한 경우 실행할 함수
// - always() : 요청후 항상 실행할 함수

$.ajax({
	url: "URL주소",
	method: "POST",
	data: { name: "John", location: "Boston" }
}).done(function(response) {
	// 성공했을 때 // resolve
}).fail(function(){
	// 실패했을 시 // reject
}).always(function(){
	// 항상 실행
});