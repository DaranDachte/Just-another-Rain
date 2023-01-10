import React, { useState } from "react";
import styles from "./toggleVisibility.module.css";

const ToggleVisibility = ({
  index,
  isActive,
  setActiveVersion,
  title,
  text,
}) => {


  return (
    <div
      onClick={() => setActiveVersion(index)}
      onDoubleClick={() => setActiveVersion(false)}
    >
      <h3>{title}</h3>
      {isActive && <div>{text}</div>}
    </div>
  );
};

export default ToggleVisibility;
