import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.childLeft}>
        <p>Created by Daran Dachte</p> 
        </div>
        <div className={styles.childGit}><a
          className={styles.link}
          href="https://github.com/DaranDachte"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
          <p className={styles.linkText}>GitHub</p>
        </a>
        </div>
        <div className={styles.childEmail}>
        <a href="mailto:darandachte@gmail.com" className={styles.link}>
          <AiOutlineMail />
          <p className={styles.centerText} >Send Email</p>
        </a>
      </div>
      <div className={styles.childRight}>
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=FE7R74MJZ7PJU"
          className={styles.link}
          rel="noreferrer"
          target="_blank"
        >
          <BiDonateHeart />
          <p className={styles.linkText} >Donate</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
