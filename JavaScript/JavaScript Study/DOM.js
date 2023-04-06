// DOM Document Object Model
// XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스

// DOM은 계층구조로 표현된다

// 요소를 선택하기 위한 메소드
// document.getElementsByTagName() // 해당 태그 이름의 요소를 모두 선택
// document.getElementById() // 해당 아이디 요소를 선택
// document.getElementsByClassName() // 해당 클래스명을 가진 요소 모두 선택
// document.getElementsByName() // 해당 name을 가지는 요소를 모두 선택
// document.querySelectorAll() // 해당 선택자로 선택되는 요소 모두 선택

// HTML 객체 집합을 이용한 선택
// document.title // <title> 요소를 선택함
// .innerHTML = "" // 요소의 내용을 변경

// DOM을 이용해서 속성이나 스타일 값을 변경할 수 있음
// const title = documnet.getElementById("title")
//title.style.color = "#ccc" title.link.href =""

//이벤트 핸들러 추가
document.getElementById().onclick = function(){
    실행할코드
}



// 노드(node)
// HTML DOM은 노드라고 불리는 계층적 단위에 정보를 저장 DOM은 노드들을 정의하고 사이 관계를 설명해주는 역할이다
// 노드의 종류
// 1. 문서(document) 노드 HTML : 문서 전체를 나타내는 노드
// 2. 요소(element) 노드 : 모든 HTML 요소, 속성 노드를 가질 수 있는 유일한 노드
// 3. 속성(attribute) 노드 : 모든 HTML 요소의 속성, 요소 노드에 관한 정보를 가지고 있음
// 4. 텍스트(text) 노드 : HTML 문서의 모든 텍스트
// 5. 주석(comment) 노드 : HTML 문서의 모든 주석

// 노드에 접근하는 방법
// 1. getElementByTagName() 메소드를 이용해 접근
// 2. 노드 간의 관계를 이용해 접근
// parentNode : 부모노드
// childNodes : 자식 노드 리스트
// firstChild : 첫번째 자식 노드
// lastChild : 마지막 자식 노드
// nextSibling : 다음 형제 노드
// previousSibling : 이전 형제 노드

// 노드에 대한 정보 접근
// nodeName, nodeValue, nodeType과 같은 프로퍼티로 접근이 가능함


// 노드의 생성
// createElement(), createAttribute(), createTextNode()

// 노드의 제거
// removeChilde(), removeAttribute()

// 노드의 복제
// cloneNode()

// 노드 값 변경
// 속성 노드 값 변경 setAttribute()
// 텍스트 노드 값 변경 nodeValue

// 요소 노드 교체
// replaceChild()
// 텍스트 노드 데이터 교체
// replaceDate(오프셋, 교체할문자수, 새로운데이터)