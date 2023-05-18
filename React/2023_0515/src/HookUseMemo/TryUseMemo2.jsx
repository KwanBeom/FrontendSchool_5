import React, { useMemo, useRef, useState } from "react";

export default function TryUseMemo2() {
    const [userInfo, setUserInfo] = useState([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    function handleInputName(e) {
        console.log(e);
        setName(e.target.value);
        console.log("렌더링 - 1");
    }

    function handleInputId(e) {
        console.log(e);
        setId(e.target.value);
        console.log("렌더링 - 2");
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(e.target[0].value!=='' && e.target[1].value!==''){
            const newInfo = [...userInfo, { name, id }];
            setName('')
            setId('')
            e.target[0].focus()
            setUserInfo(newInfo);
            console.log("렌더링 - 3");
        }else{
            alert("!!")
        }
    }

    const num = useMemo(() => getNum(userInfo), [userInfo])


    // 모든 렌더링에 함께 렌더링되는 이슈가 있습니다.
    function getNum(li) {
        console.log("렌더링!");
        return li.length;
    }

    return (
        <>
            {/* <form> */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    onChange={handleInputName}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="아이디를 입력하세요"
                    onChange={handleInputId}
                    value={id}
                />
                {/* <button type="submit" onClick={handleSubmit}> */}
                <button type="submit">
                    회원 명부 작성
                </button>
            </form>
            <ul>
                {userInfo.map((value, index) => (
                    <li key={index}>
                        <h3>이름 : {value.name}</h3>
                        <strong>아이디 : {value.id}</strong>
                    </li>
                ))}
            </ul>
            <span>현재 회원 수 : {num}</span>
        </>
    );
}
