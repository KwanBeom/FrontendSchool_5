import React from "react";
import styled from "styled-components";

const Btn1 = styled.button`
    background: royalblue;
    color: white;
    padding: 10px;
    font-weight: bold;
`;

const Btn2 = styled(Btn1)`
    color: initial;
    border-radius: 10px;
    box-shadow: 0 0 5px black;
    border: 0;
`;

const Btn3 = styled(Btn2)`
    border-radius: 20px;
    background: mediumseagreen;
    color: white
`

export {Btn1, Btn2, Btn3}
