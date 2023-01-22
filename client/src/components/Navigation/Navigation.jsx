import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/Choose_your_Rain">Choose Your Rain</NavLink>
      <NavLink to="/Find_your_Rain">Find Your Rain</NavLink>{" "}
      <NavLink to="/gallery">Gallery</NavLink>{" "}
    </nav>
  );
};

export default Navigation;
