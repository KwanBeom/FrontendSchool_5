import React, { useEffect, useState } from "react";

export default function useMouseLocation(iniVal) {
    const [mouseLocation, setMouseLocation] = useState(iniVal || {x:0, y:0});

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setMouseLocation({ x: e.x, y: e.y });
        });
    }, []);    

    return mouseLocation
}
