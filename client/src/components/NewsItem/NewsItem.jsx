import styles from "./NewsItem.module.css";

const NewsItem = ({ country, language, description, link }) => {
  return (
    <a className={styles.wrapper} href={link} target="_blank" rel="noreferrer">
      <h3>{country}</h3>
      <h4>{language}</h4>
      <h5>{description}</h5>
    </a>
  );
};

export default NewsItem;
