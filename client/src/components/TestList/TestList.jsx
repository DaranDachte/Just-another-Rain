import TestItem from "../TestItem";
import styles from "./TestList.module.css";
const TestList = () => {
  return (
    <>
      <div className={styles.title}>
        <h2>Depression Tests</h2>
        <p>
          Warning! If you find any signs of depression after taking these tests,
          copy and Google this phrase. It means finding psychological help near
          where you live.
        </p>
        <p>Hilfe von einem Psychologen in meiner Nähe</p>
      </div>
      <div className={styles.container}>
        <TestItem
          title="🇷🇺️ Шкала Занга для самооценки депрессии"
          description="Тест, выявляющий соматические, психологические, поведенческие и аффективные симптомы депрессии.Предназначен для самостоятельного прохождения и позволяет получить количественную оценку тяжести депрессии. Следует проходить 1-2 раза в неделю. Вы сами можете сравнить как изменяется интенсивность депрессии с течением времени."
          link="http://test-deprese.hys.cz/ru-index.php"
        />
        <TestItem
         title="🇺🇸🇬🇧️️ Zung Self-Rating Depression Scale (SDS)"
          description="The Zung Self-Rating Depression Scale is a short self-administered survey to quantify the depressed status of a patient. There are 20 items on the scale that rate the four common characteristics of depression: the pervasive effect, the physiological equivalents, other disturbances, and psychomotor activities."
          link="http://test-deprese.hys.cz/en-index.php"
        />
        <TestItem
          description="Die Zung-Selbstbewertungsskala für Depressionen ist eine kurze, selbstverwaltete Umfrage zur Quantifizierung des depressiven Zustands eines Patienten. Die Skala umfasst 20 Items, mit denen die vier allgemeinen Merkmale der Depression bewertet werden: die durchdringende Wirkung, die physiologischen Äquivalente, andere Störungen und psychomotorische Aktivitäten."
          title="🇩🇪️ Test zur Selbst-Diagnose einer Depression von Zung"
          link="http://test-deprese.hys.cz/de-index.php"
        />
        <TestItem
          description="Онлайн тест на депресію, який допоможе допомогти вам зрозуміти ваш стан, і за потреби одразу звернутися по допомогу професіоналів. "
          title="🇺🇦️ Тест на депресію"
          link="https://mozok.ua/depressiya/testy/item/2713-test-na-depressiyu"
        />
        <TestItem
          description="sdfsdfsdfsdf"
          title="sdfgfsfsdfsdf"
          link="asdfsdfsdfsdfds"
        />
        <TestItem
          description="sdfsdfsdfsdf"
          title="sdfgfsfsdfsdf"
          link="asdfsdfsdfsdfds"
        />
        <TestItem
          description="sdfsdfsdfsdf"
          title="sdfgfsfsdfsdf"
          link="asdfsdfsdfsdfds"
        />
        <TestItem
          description="sdfsdfsdfsdf"
          title="sdfgfsfsdfsdf"
          link="asdfsdfsdfsdfds"
        />
        <TestItem
          description="sdfsdfsdfsdf"
          title="sdfgfsfsdfsdf"
          link="asdfsdfsdfsdfds"
        />
      </div>
    </>
  );
};

export default TestList;
