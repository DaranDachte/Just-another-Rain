import React from "react";
import Navigation from "../components/Navigation";
// import video1 from "../img/toomuch.mp4";
// import video2 from "../img/RainHolland.mp4";
// import video3 from "../img/KyrgystanRain.mp4";
// import video4 from "../img/AustralliaRain.mp4";
// import video5 from "../img/Grow up.mp4";
import "./Diary.module.css";

export default function Diary() {
  return (
    <>
    <Navigation />
      <div className="tomuch">
        <div className ="tomuch_content">
        🌞️
        </div>
        {/* <video src={video1} muted controls id="myVideoDiary"></video> */}
        <h1 class="rain">
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
      </div>
      <div className="holland">
        <div className="flag">
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 9 6">
<rect fill="#21468B" width="9" height="6"/>
<rect fill="#FFF" width="9" height="4"/>
<rect fill="#AE1C28" width="9" height="2"/>
</svg>
        </div>
        {/* <video src={video2} controls muted id="myVideoDiary"></video> */}
      </div>
      <div className="kyrgystan">
        {/* <video src={video3} controls muted id="myVideoDiary"></video> */}
      </div>
      <div className="australia">
        {/* <video src={video4} controls muted id="myVideoDiary"></video> */}
      </div>
      <div className="growup">
        {/* <video src={video5} controls muted id="myVideoDiary"></video> */}
      </div>
    </>
  );
}
