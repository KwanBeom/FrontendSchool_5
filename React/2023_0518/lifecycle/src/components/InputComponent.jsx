import React from "react";
import useInput from "../hook/useInput";

export default function InputComponent() {
    const [value, onChange] = useInput("");
    return (
        <>
            <input type="text" onChange={onChange} />
            {value}
        </>
    );
}
