import React from "react";
import licat from "../../src/images/licat.png"
import "./Modal.css"

export default function Modal({closeModal}) {
    return (
        <article id="modal" onClick={closeModal}>
            <div className="modal-wrap">
                <h2>화이팅!!♥♥♥</h2>
                <h3>당신의 꿈을 응원합니다!</h3>
                <img src={licat} alt="응원하는 라이캣" />
                <button type="button" className="btn-close">
                    종료하고 진짜 훈련하러가기 GO!GO!
                </button>
            </div>
        </article>
    );
}
