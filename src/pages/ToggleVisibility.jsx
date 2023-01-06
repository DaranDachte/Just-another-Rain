import React, { useState } from "react";
import styles from "./toggleVisibility.module.css";

export default function ToggleVisibility({ children, title }) {
  // React state to manage visibility
  const [show, setShow] = useState(false);

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  let buttonText = show ? `${title}` : ` ${title}`;

  return (
    <div>
      {show && children}
      <button className={styles.short} onClick={toggleShow}>
        {buttonText}
      </button>
    </div>
  );
}
