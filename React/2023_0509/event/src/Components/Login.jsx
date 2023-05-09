import { useState } from "react";

export default function Login({ userInfo, setLogin }) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    let login = false;

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (id === "") {
            alert("아이디를 입력하지 않았습니다.");
        }
        if (pw === "") {
            alert("패스워드를 입력하지 않았습니다.");
        }
        // alert(`id : ${id}, pw : ${pw}`);
        if (userInfo.idUser === id && userInfo.pwUser === pw) {
            setLogin(true)
        }
    };

    const handleLoginInput = (e) => {
        console.log("id", e.target.value);
        setId(e.target.value);
    };

    const handlePasswordInput = (e) => {
        console.log("pw", e.target.value);
        setPw(e.target.value);
    };

    return (
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디 : <input type="text" onChange={handleLoginInput} />
            </label>
            <br />
            <label>
                비밀번호 :
                <input type="password" onChange={handlePasswordInput} />
            </label>
            <button type="submit">로그인</button>
        </form>
    );
}
