import React from "react";
import useInput from "../hook/useInput";

export default function SomethingComponent() {
    const [value, onChange] = useInput("");
    return (
        <>
            <input type="text" onChange={onChange} />
            {value}가 강해졌당
        </>
    );
}
