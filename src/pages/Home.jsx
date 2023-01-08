import React from "react";
// import video from "../img/rainbow.mp4";
import styles from "./Home.module.css";
import Cloud from "../components/Cloud";

export default function Home() {
  return (
    <div className={styles.wrapper}> 
      <Cloud text="About" url="/about" />
      {/* <video src={video} autoPlay muted loop id="myVideo"></video> */}
    </div>
  );
}
