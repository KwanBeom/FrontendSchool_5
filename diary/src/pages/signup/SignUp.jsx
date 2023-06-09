import React from "react";
import logo from "../../assets/image/logo.svg";
import styles from "../login/Login.module.css";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

export default function SignUp() {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [displayName, setDisplayName] = useState("");

  const { error, isPending, signup } = useSignup();

  const handleData = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    }
    if (e.target.type === "password") {
      setPassword(e.target.value);
    }
    if (e.target.type === "text") {
      setDisplayName(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    signup(email, password, displayName);
  };
  return (
    <>
      <main>
        <h2 className={styles["img-title"]}>
          <img src={logo} alt="" />
          <strong className="line">회원가입</strong>
        </h2>

        <form className={styles["form-wrap"]} onSubmit={handleSubmit}>
          <label className="label-style" htmlFor="user-email">
            이메일
          </label>
          <input className="input-style" type="email" id="user-email" onChange={handleData} value={email} required />
          <label className="label-style" htmlFor="user-pw">
            비밀번호
          </label>
          <input className="input-style" type="password" id="user-pw" onChange={handleData} value={password} required />

          <label className="label-style" htmlFor="user-nickname">
            닉네임
          </label>
          <input className="input-style" type="text" id="user-nickname" onChange={handleData} value={displayName} required />

          <button className="black-btn" type="submit">
            회원가입
          </button>
        </form>
      </main>
      <footer>
        <p>Copyright 2023. WENIV All rights reserved.</p>
      </footer>
    </>
  );
}
