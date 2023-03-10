import styles from "./NewsList.module.css";
import NewsItem from "../NewsItem";

const NewsList = () => {
  return (
    <>
      <div className={styles.newsTitle}>
        {" "}
        <h2>News from the world</h2>
      </div>

      <div className={styles.container}>
        <NewsItem
          country="France ๐ซ๐ท๏ธ"
          language="english ๐ด๓ ง๓ ข๓ ฅ๓ ฎ๓ ง๓ ฟ๏ธ"
          description="'Spider-Man' of Paris to get French citizenship after child rescue."
          link="http://https://www.theguardian.com/world/2018/may/28/spider-man-of-paris-to-get-french-citizenship-after-rescuing-child"
        />
        <NewsItem
          country="Germany๐ฉ๐ช๏ธ"
          language="german ๐ฉ๐ช"
          description="Angolan refugee stopped a burning bus on the A2 motorway and saved the lives of 66 people."
          link="https://dorsten-online.de/andre-tiago-manuel-ist-schutzengel-auf-der-a2/"
        />
        <NewsItem
          country="Russia ๐ท๐บ๏ธ"
          language="russian ๐ท๐บ๏ธ"
          description="A migrant from Tajikistan saved a child from dying in the Moscow subway."
          link="https://bomdodrus.com/2022/03/15/migrant-iz-tadzhikistana-spas-rebenka-ot-smerti-v-moskovskom-metro/"
        />
        <NewsItem
          country="Norway ๐ณ๐ด๏ธ"
          language="ukrainian ๐บ๐ฆ๏ธ"
          description="A 17-year-old Ukrainian refugee learned the Norwegian language in record time."
          link="https://life.pravda.com.ua/society/2023/02/1/252648/"
        />
        <NewsItem
          country="France ๐ซ๐ท๏ธ"
          language="german ๐ฉ๐ช"
          description="Lassana Bathily saved several lives in the supermarket attack."
          link="https://www.faz.net/aktuell/politik/ausland/europa/lassana-bathily-frankreichs-neuer-held-13364961.html"
        />
      </div>
    </>
  );
};

export default NewsList;
