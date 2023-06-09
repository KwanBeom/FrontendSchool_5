import React from "react";
import DiaryForm from "./DiaryForm";
import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import DiaryList from "./DiaryList";

export default function Home() {
  const d = new Date();
  const year = d.getFullYear();
  // padStart : 현재 문자열의 시작을 다른 문자열로 채워주는 기능
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const date = String(d.getDate()).padStart(2, "0");
  const { user } = useAuthContext();
  const { documents, error } = useCollection("secretDiary", ["uid", "==", user.uid]);

  return (
    <div className={styles.container}>
      <main className={styles["diary-main"]}>
        <h2 className={styles.heart}>
          <time dateTime={`${year}.${month}.${date}`}>{`${year}.${month}.${date}`}</time>의 비밀일기
        </h2>
        <DiaryForm uid={user.uid} />
      </main>
      <section>
        <h2 className="a11y-hidden">일기 목록</h2>
        <ul>
          {error && <strong>{error}</strong>}
          {documents && <DiaryList diaries={documents} />}
        </ul>
      </section>
    </div>
  );
}
