import React from "react";
// import video from "../img/rainbow.mp4";
import styles from "./Home.module.css";
import Cloud from "../components/Cloud";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cloudList}>
        <div className={styles.position}>
          <Cloud text="About" url="/about" />
        </div>
        <div className={styles.position}>
          <Cloud text="Diary" url="/diary" />
        </div>
        <div className={styles.position}>
          <Cloud text="Tests News Donations" url="/tests_news_donations" />
        </div>
        <div className={styles.position}>
          <Cloud text="Questions and Answers" url="/questions_and_answers" />
        </div>
        <div className={styles.position}>
          <Cloud text="Gallery" url="/gallery" />
        </div>
      </div>
      {/* <video src={video} autoPlay muted loop id="myVideo"></video> */}
    </div>
  );
}