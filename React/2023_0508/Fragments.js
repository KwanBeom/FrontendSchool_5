// 컴포넌트가 여러 엘리먼트를 동시에 return 해야 할 경우 에러가 발생합니다. 
// jsx 컴포넌트는 최상위 부모요소를 가져야 하기 때문에 보통 div 태그로 다른 태그들을 감싸주었습니다. 
// 하지만 이렇게 코드를 작성하면 여러 개의 엘리먼트들을 감싸주기 위해서 의미 없는 div 태그를 자주 사용하게 됩니다.

// 의미없는 div 태그들로 감싸게 된다면 시맨틱 마크업에 방해가 된다

// 그래서 Fragments를 사용한다

// Fragments를 사용하게 되면 div와 같은 별도의 노드를 추가하지 않고도
// 여러개의 자식을 감싸줄 수 있다.

render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

// import 키워드를 통해 모듈을 추가
import React from 'react';

// Fragment를 사용해 작성
function App() {
  return (
		<React.Fragment>
			<h1>안녕, 라이캣 1호!</h1>
			<h1>안녕, 라이캣 2호!</h1>
		</React.Fragment>
  );
}

// Fragment 라는 키워드 대신 <> </> 를 사용할 수도 있습니다. 
// 이때는 fragment를 사용하기 위해 React모듈을 따로 추가할 필요가 없습니다.

function App() {
  return (
		<>
			<h1>안녕, 라이캣 1호!</h1>
			<h1>안녕, 라이캣 2호!</h1>
		</>
  );
}

// React Fragment는 React 엘리먼트이기 때문에, 
// 일반적인 React 엘리먼트와 마찬가지로 props를 전달할 수 있습니다.

// React Fragments 요소는 화면에 랜더링 되지 않기 때문에 
// 스타일과 관련된 속성을 사용하는것은 무의미하며 
// 보통 리스트 아이템의 key 값을 설정할 때 많이 사용합니다. 

// 단축 문법으로 사용할때는 props를 사용할 수 없습니다.