import React from "react";
import "./Modal.css"

export default function modal(props) {

    return (
        <div className="modal-backdrop">
            <article className="modal">
                {props.children}
                <h2>홈페이지에 오신것을 환영하겠다</h2>
                <p>히히</p>
                <button onClick={props.modalClose}>X</button>
            </article>
        </div>
    );
}

// children : 내부에 있는 친구들을 받을 수 있다.
