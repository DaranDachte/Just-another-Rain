import styles from "./NewsItem.module.css";

const NewsItem = ({ country, language, description, link }) => {
  return (
    <a className={styles.wrapper} href={link} target="_blank" rel="noreferrer">
      <h3>Origin of news: {country}</h3>
      <h4>Language of news: {language}</h4>
      <h5>Short description: "{description}"</h5>
    </a>
  );
};

export default NewsItem;
