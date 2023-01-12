import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles["video-bg"]}>
        <video
          src="./img/just.mp4"
          type="video/mp4"
          autoplay
          muted
          loop
        ></video>
        <div className={styles["video-bg_content"]}>
          <h1 onAnimationEnd={() => navigate("/")}>
            <span>J</span> <span>U</span> <span>S</span> <span>T</span>{" "}
            <span> </span> <span>A</span> <span>N</span> <span>O</span>{" "}
            <span>T</span> <span>H</span> <span>E</span> <span>R</span>{" "}
            <span></span> <span>R</span> <span>A</span> <span>I</span>{" "}
            <span>N</span>
          </h1>
        </div>
      </div>
      {/* <div class="audio">
        <audio controls loop>
          {" "}
          <source src="./img/liven_groza_grom.mp3" type="audio/mpeg" />
        </audio>
      </div> */}
    </div>
  );
};

export default Welcome;
