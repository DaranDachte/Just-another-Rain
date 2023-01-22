import { useState } from "react";
import Form from "../components/Form";
import QuestionList from "../components/QuestionList";
import Navigation from "../components/Navigation";
import styles from "./FindYourRain.module.css";

const FindYourRain = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Navigation />
      <QuestionList />
      <div>
        <button
          onClick={() => setClicked(true)}
          onDoubleClick={() => setClicked(false)}
        >
          Ask a question
        </button>
        {clicked && <Form />}
      </div>
    </div>
  );
};

export default FindYourRain;
