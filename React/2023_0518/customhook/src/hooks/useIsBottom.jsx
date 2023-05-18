import React, { useEffect, useState } from "react";

export default function useIsBottom() {
    const [isBottom, setIsBottom] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsBottom(
                document.documentElement.scrollTop + window.innerHeight + 30 >=
                    document.documentElement.offsetHeight
            );
        });
    })
    return isBottom
}

