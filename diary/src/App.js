import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";
import Header from "./components/Header";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { isAuthReady, user } = useAuthContext();
  return (
    <>
      {isAuthReady ? (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate replace={true} to="/login" />}></Route>
            <Route path="/login" element={!user ? <Login /> : <Navigate replace={true} to="/" />}></Route>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate replace={true} to="/" />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        "Loading ..."
      )}
    </>
  );
}
export default App;
