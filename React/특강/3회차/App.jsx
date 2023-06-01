function ShowNum(props) {
  const numContext = React.useContext(NumContext);

  // props.num 불러오는 무언가...대신하는거
  return <div>{numContext.num}</div>;
}

// Button.jsx
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        width: "50px",
        height: "50px",
      }}
    >
      <ShowNum />
      {props.children}
    </button>
  );
}
function Counter() {
  const numContext = React.useContext(NumContext);

  return (
    <>
      <Button onClick={numContext.plus}>+</Button>
      <Button onClick={numContext.minus}>-</Button>
    </>
  );
}
function ShowDubble() {
  const numContext = React.useContext(NumContext);
  return <div>{numContext.num * 2}</div>;
}

const NumContext = React.createContext();

function NumContextProvider({ children }) {
  const [num, setNum] = React.useState(0);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
  return (
    <NumContext.Provider value={{ num: num, plus: plus, minus: minus }}>
      {children}
    </NumContext.Provider>
  );
}

// HomePage.jsx
function HomePage() {
  return (
    <>
      <NumContextProvider>
        <h1>숫자 카운터 만들기</h1>
        <Counter />
        <ShowDubble />
      </NumContextProvider>
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}

App();
