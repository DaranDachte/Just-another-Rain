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
          <Cloud text="Choose your Rain" url="/Choose_your_Rain" />
        </div>
        <div className={styles.position}>
          <Cloud text="Find your Rain" url="/Find_your_Rain" />
        </div>
        <div className={styles.position}>
          <Cloud text="This Rain is Classic" url="/This_Rain_is_Classic" />
        </div>
      </div>
      {/* <video src={video} autoPlay muted loop id="myVideo"></video> */}
    </div>
  );
}
