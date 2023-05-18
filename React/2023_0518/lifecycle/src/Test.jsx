import React, { useEffect, useState, useLayoutEffect } from 'react'

export default function Eff() {
    const [num, setNum] = useState(0);

    useLayoutEffect(() => {

        setNum(10); //사실은 엄청 오래걸리고 어려운 로직

    }, [num]);

    return (
        <>
            <div>{num}</div>
            <button onClick={() => setNum(prevNum => prevNum + 1)}>클릭</button>
        </>
    )
}