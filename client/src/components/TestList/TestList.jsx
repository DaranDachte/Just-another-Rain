import TestItem from "../TestItem";
import styles from "./TestList.module.css";
const TestList = () => {
  return (
    <>
      <div className={styles.title}>
        <h2>Depression Tests</h2>
        <p>Warning! If you find any signs of depression after taking these tests, copy and Google this phrase. It means finding psychological help near where you live.</p>
        <p>Hilfe von einem Psychologen in meiner Nähe</p>
      </div>
      <div className={styles.container}>
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
