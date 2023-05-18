import React, {useState, useEffect} from "react";
import useIsBottom from "../hooks/useIsBottom";

export default function ImageItem({setLoad}) {
    const [imageData, setImageData] = useState([]);
    const [morePage, setMorePage] = useState(1)
    const isBottom = useIsBottom();
    console.log(isBottom)
    useEffect(() => {
        if(isBottom){
            setMorePage((prevPage) => prevPage+1)
        }
    }, [isBottom])
    
    useEffect(() => {
        fetchData();
    }, [morePage]);
    
    const fetchData = async () => {
        setLoad(true);
        try {
            const res = await fetch(
                `https://picsum.photos/v2/list?page=${morePage}&limit=5`
            );
            if (!res.ok) throw new Error("Network Error!");
            const json = await res.json();
            setImageData((prev) => {
                return [...prev, ...json]
            });
            setLoad(false)
        } catch (e) {
            console.log(e);
            setLoad(false)
        }
    };


    return (
        <>
            {imageData.map((item, idx) => {
                return (
                    <li key={idx}>
                        <img
                            src={item.download_url}
                            alt=""
                            width="400"
                            height="300"
                        />
                    </li>
                );
            })}
        </>
    );
}
