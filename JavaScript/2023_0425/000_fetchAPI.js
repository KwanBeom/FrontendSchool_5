// fetch API (fetch : 가져오다, 찾아내다)
// XMLHttpRequest를 대체할 API
// XHR과 fetch의 차이점
// XHR : XMLHttpRequest가 생성하는 인스턴스로 통신을 수행하는 객체를 반환해 사용
// fetch : 인스턴스를 만들지 않고 '약속'을 반환


// Promise는 비동기 코드를 동기적인 코드처럼 작성할 수 있음.
// why? 이행(fulfilled)되거나, 거절(reject)되는 둘 중 하나의 결과만을 가지게 됨
// 통신의 결과는 코드상에서는 아직 알 수 없지만, '이행 혹은 거절 둘 중 하나의 결과가 있을거라 생각하고 작업을 진행하자'
// 라는 개념으로 만들어졌기 때문에 `then`과 `catch`를 이용해 동기적으로 코드를 이어서 쓸 수 있는 것
// Promise, Asyn, resolved, fufilled, rejected
// fufilled : 약속을 이행, 완수
// resolved : 해결
// rejected : 거절