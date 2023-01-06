import React from "react";
import CloudAbout from "../components/ui/cloudAbout";
import CloudChooseYourRain from "../components/ui/cloudChooseYourRain";
import CloudDiary from "../components/ui/cloudDiary";
// import video from "../img/rainbow.mp4";
import CloudFindYourRain from "../components/ui/cloudFindYourRain";
import "./Home.module.css";
import CloudThisRainisClassic from "../components/ui/cloudThisRainIsClassic";
// import Notfoundpage from "../components/ui/NotFoundPage";

export default function Home() {
  return (
    <div>
      {/* <video src={video} autoPlay muted loop id="myVideo"></video> */}
      <CloudAbout />
      <CloudDiary />
      <CloudChooseYourRain />
      <CloudFindYourRain />
      <CloudThisRainisClassic />
      {/* <Notfoundpage /> */}
    </div>
  );
}
