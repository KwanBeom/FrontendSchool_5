import React from "react";

export default function Homepage({setLogin, viewModalFunc}) {
    function logOut() {
        setLogin(false)
        viewModalFunc(true)
    }
    return (
        <>
            <div>로그인 완료</div>
            <button onClick={logOut}>로그아웃</button>
        </>
    );
}
