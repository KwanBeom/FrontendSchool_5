import React, { Fragment } from "react";

function App() {
    return (
        <>
            
            <DescList />
        </>
    );
}

let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

function MyComponent() {
    return (
      list.map((item,idx) => {
        return(
          <>
            <h1>{item.area}</h1>
            <p>{item.visited ? "방문했음" : "아직"}</p>
          </>
        )
      })
    )
}

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function DescList() {
    const itemsList = items.map(item => {
      return(
        <React.Fragment key={item.id}>
          <dt>{item.name}</dt>
          <dd>{item.desc}</dd>
        </React.Fragment>
        )
    })
    return <dl>{itemsList}</dl>
}

export default App;
