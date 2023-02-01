import styles from "./TestItem.module.css";

const TestItem = ({ title, description, link }) => {
  return (
  <div className={styles.wrapper}>
    <h3>{title}</h3>
    <h4>{description}</h4>
    <a href={link} target="_blank" rel="noreferrer">Learn more.</a>
    </div>
  );
  
};

export default TestItem;
