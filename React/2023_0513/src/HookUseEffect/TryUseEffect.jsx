import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [실행할건지, 실행상태변경함수] = useState(false)
    const handleCountUp = (e) => {
        setCount(count + 1);
    };
    useEffect(() => {
        실행상태변경함수(true)
        if(실행할건지){
            if (count % 2) {
                alert("홀수입니다");
            } else {
                alert("짝수입니다");
            }
        } 
    }, [count]);

    return (
        <>
            <div>{count}</div>
            <button onClick={handleCountUp}>Up!</button>
        </>
    );
}

export default Counter;
