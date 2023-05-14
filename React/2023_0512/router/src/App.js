import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (<>
    <BrowserRouter>
    <Link to="/" style={{color: "black"}}>main</Link>
    <Link to="/one">one</Link>
    <Link to="/two">two</Link>
    <Link to="/three">three</Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name="bk"/>}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
    
  </>);
}

function Index(){
  return <h1>hello world0</h1>
}

function One(props){
  return <h1>hello {props.name}1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;