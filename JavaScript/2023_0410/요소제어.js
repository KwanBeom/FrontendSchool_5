// DOM api를 이용하면 요소를 생성, 위치조정, 제거할 수 있음
document.createElement(target); // target 요소를 생성
document.createTextNode(target); // target 텍스트를 생성
document.appendChild(target); // target 요소를 element의 자식으로 생성
document.removeChild(target); // element의 target 자식요소 제거
element.append(target); // target 요소를 element의 자식으로 위치
// appendChild와 차이 : 노드뿐만 아니라 여러개의 노드를 한번에, 텍스트도 자식 노드로 포함시킬 수 있음
target.remove(); // target 요소를 제거
