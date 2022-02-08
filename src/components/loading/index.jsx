import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles["loading"]}>
      <i className={`bx bx-loader-circle`}></i>
    </div>
  );
};

export default Index;
