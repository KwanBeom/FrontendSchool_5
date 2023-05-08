import React, { useState } from "react";
function Resume(props) {
    console.log(useState(0))
    const [like, setLike] = useState("");
    // let like = 0;

    // function clickLike() {
    //     like += 1;
    //     console.log(like);
    // }

    function clickLike(){
        if(like===""){
        setLike("Like");
    }else{
        setLike("")
    }
    }

    return(
        <div style={{border: "1px solid"}}>
            <h1>{props.name} 자기소개서</h1>
            <h2>{props.hello}</h2>
            <h3>취미 : {props.hobby}</h3>
            <h3>좋아하는 음식 : {props.food}</h3>
            <h3>좋아하는 색 : <span style={{color: props.color}}>{props.color}</span></h3>
            <button onClick={clickLike}>like </button>
            <span>{like}</span>
        </div>
    )
}

export default Resume