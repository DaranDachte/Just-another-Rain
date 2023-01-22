import React, { useState } from "react";
import Navigation from "../components/Navigation";
import video1 from "../assets/videos/too_much.mp4";
import video2 from "../assets/videos/rain_holland.mp4";
import video3 from "../assets/videos/kyrgystan_rain.mp4";
import video4 from "../assets/videos/australia_rain.mp4";
import video5 from "../assets/videos/grow_up.mp4";
import styles from "./Diary.module.css";
import { ReactComponent as HollandFlag } from "../assets/img/holland_flag.svg";
import { ReactComponent as Tulip } from "../assets/img/tulip.svg";
import { ReactComponent as Sun } from "../assets/img/sun.svg";
import { ReactComponent as ScrollDown } from "../assets/img/scrolldown.svg";

export default function Diary() {
  const [isAnimation, setIsAnimation] = useState(false);
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const onStartHandler = (event) => {
    if (event.target.currentTime < 1) {
      setIsAnimation(true);
    }
  };

  const onStopHandler = () => {
    setIsAnimation(false);
  };

  const onEndedHandler = (e) => {
    setIsScrollVisible(true);
  };

  return (
    <div className={styles.wrapper}>
      <Navigation />

      <div className={styles.diaryVideoWrapper}>
        <Sun className={styles.sun} />
        <video
          className={styles.diaryVideo}
          src={video1}
          muted
          controls
          onEnded={onEndedHandler}
        />
        <h1 className={styles.rain}>
          <span>
            I have been living in Germany for several years. I can't get used to
            the German rain. It rains too much here. It goes on for several days
            without a break. Every time I feel depressed. This rain dissolves
            me. I can't survive without the sun. I try to find a solution and
            communicate with other people. They are different. Someone was born
            in this country and feels good. Someone moved here many years ago
            and knows how to find balance. Maybe their experience will change my
            life. I will ask them - where did you come from, what are you doing
            here. How to become happy under this rain?{" "}
          </span>
        </h1>
        {isScrollVisible && <ScrollDown className={styles.scrollDown} />}
      </div>
      <div className={styles.diaryVideoWrapper}>
        <HollandFlag
          className={`${styles.hollandFlag} ${
            isAnimation ? styles.hollandFlagAppearAnimation : ""
          }`}
        />
        <Tulip
          className={`${styles.tulip} ${
            isAnimation ? styles.tulipAnimation : ""
          }`}
        />
        <video
          onPlay={onStartHandler}
          onPause={onStopHandler}
          className={styles.diaryVideo}
          src={video2}
          controls
          muted
          onEnded={onEndedHandler}
        />
        {isScrollVisible && <ScrollDown className={styles.scrollDown} />}
      </div>
      <div className={styles.diaryVideoWrapper}>
        <video
          className={styles.diaryVideo}
          src={video3}
          controls
          muted
          onEnded={onEndedHandler}
        />
        {isScrollVisible && <ScrollDown className={styles.scrollDown} />}
      </div>
      <div className={styles.diaryVideoWrapper}>
        <video
          className={styles.diaryVideo}
          src={video4}
          controls
          muted
          onEnded={onEndedHandler}
        />
        {isScrollVisible && <ScrollDown className={styles.scrollDown} />}
      </div>
      <div className={styles.diaryVideoWrapper}>
        <video className={styles.diaryVideo} src={video5} controls muted />
      </div>
    </div>
  );
}
