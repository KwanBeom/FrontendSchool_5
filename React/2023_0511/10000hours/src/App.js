import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";
import { useState } from "react";

function App() {
  const [modalShow, setModalshow] = useState(false)
  function showModal(){
    setModalshow(true)
  }
  function closeModal(e){
    if(e.target.classList.contains("btn-close") || e.target.id === "modal"){
      setModalshow(false)
    }
  }
    return (
        <div id="app">
            <Header />
            <Main showModal={showModal}/>
            <Footer />
            {modalShow && <Modal closeModal={closeModal}/>}
        </div>
    );
}
export default App;
