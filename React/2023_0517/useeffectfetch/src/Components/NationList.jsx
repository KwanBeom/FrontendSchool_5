import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Item = styled.div`
margin: 60px auto;
ul{
    list-style: none;
    padding: 10px;
}
li{
    border: 1px solid #000;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
}
`;

export default function NationList() {
    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/nations')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("네트워크 오류");
                const json = await response.json();
                setNations(json);
            } catch (error) {
                console.log("에러", error);
            }
        };

        fetchData();
    }, [url]);

    return (
        <Item>
            <h2>나라 목록</h2>
            <ul>
                {nations.map((v) => (
                    <li key={v.id}>
                        <h3>나라 이름 : {v.title}</h3>
                        <p>위치 : {v.loc}</p>
                        <p>인구수 : {v.population}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => {setUrl('http://localhost:3000/nations?loc=Europe')}}>유럽 목록</button>
            <button onClick={() => {setUrl('http://localhost:3000/nations')}}>전체 목록</button>
        </Item>
    );
}
