const { useState } = require("react");

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function AnotherCounter({ setNum }) {
  const powerNum = () => {
    setNum((num) => num * 2);
  };
  return (
    <>
      <Button onClick={powerNum}></Button>
    </>
  );
}

function Counter({ setNum }) {
  const plusNum = () => {
    setNum((num) => num + 1);
  };
  const minusNum = () => {
    setNum((num) => num - 1);
  };
  // jsx안에서 값을 사용하고싶으면 {} 중괄호로 감싸라!
  return (
    <>
      <Button onClick={plusNum}>+</Button>
      <Button onClick={minusNum}>-</Button>
    </>
  );
}

function HomePage() {
  const [num, setNum] = useState
  return (
    <>
      {num}
      <Counter setNum={setNum} />
      <AnotherCounter setNum={setNum} />
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}

App();
