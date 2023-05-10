import React, { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
    function upCount() {
        setCount(count + 1);
        setCount((prevNumber) => prevNumber+1)
    }
    function downCount() {
        setCount(count - 1)
        setCount(prevNumber => prevNumber - 1);
    }
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={upCount}>+1</button>
            <button onClick={downCount}>-1</button>
        </div>
    );
}
