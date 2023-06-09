import React, { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";
import logo from "../../assets/image/logo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, login } = useLogin();

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  return (
    <>
      <main>
        <h2 className={styles["img-title"]}>
          <img src={logo} alt="" />
          <strong className="line">로그인</strong>
        </h2>

        <form className={styles["form-wrap"]} onSubmit={handleSubmit}>
          <label className="label-style" htmlFor="user-email">
            이메일
          </label>
          <input className="input-style" id="user-email" type="email" required autoComplete="username" onChange={handleData} value={email} />

          <label className="label-style" htmlFor="user-pw">
            비밀번호
          </label>
          <input className="input-style" id="user-pw" type="password" required autoComplete="current-password" onChange={handleData} value={password} />

          {!isPending && (
            <button className="black-btn" type="submit">
              로그인
            </button>
          )}
          {isPending && <strong>로그인 중...</strong>}
          {error && <strong>error</strong>}
        </form>
      </main>

      <footer>
        <p>Copyright 2023. WENIV All rights reserved.</p>
      </footer>
    </>
  );
}
