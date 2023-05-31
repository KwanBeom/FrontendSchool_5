function App() {
  const [num, setnum] = React.useState(0);
  const [num2, setnum2] = React.useState(0);

  React.useEffect(() => {
    console.log("num이 바뀌었읍니다");
  }, [num]);
  React.useEffect(() => {
    console.log("num2가 바뀌었읍니다");
  }, [num2]);
  return (
    <>
      {num} {num2}
      <button onClick={() => setnum(num + 1)}>+</button>
      <button onClick={() => setnum2(num2 - 1)}>-</button>
    </>
  );
}

function index() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
}

index();
