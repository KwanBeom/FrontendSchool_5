import { useState } from "react";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Modal from "./Components/Modal";

function App() {
    const user = {
        idUser: "bk",
        pwUser: "1234",
    };
    const [login, setLogin] = useState(false);
    const [viewModal, setViewModal] = useState(true);

    function modalClose(e) {
        setViewModal(false);
    }

    if (login) {
        return (
            <>
                <Homepage setLogin={setLogin} viewModalFunc={setViewModal} />
                {viewModal && 
                    <Modal modalClose={modalClose}>
                        <h2>사용약관에 대해 말하겠다</h2>
                        <p>이렇게 저렇게</p>
                        <a href="#">더보기</a>
                    </Modal>
                }
            </>
        );
    } else {
        return <Login userInfo={user} setLogin={setLogin} />;
    }
}

export default App;
