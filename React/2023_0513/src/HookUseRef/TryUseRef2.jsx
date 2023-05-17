import React, { useRef, useState } from "react";

export default function TryUseRef2() {
    const myRef = useRef(null);
    const [val, setVal] = useState('')
    // myRef.current를 통해 참조 값에 접근

    return (<>
        <input type="text" ref={myRef}/>
        <button type="button" onClick={() => {
            setVal(myRef.current.value); 
            console.log(myRef.current);
        }}>useRef로 상태 바꾸기</button>
        <p>{val}</p>
    </>)
}


