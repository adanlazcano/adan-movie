import styles from "./styles.module.scss";
import logo from "./logo.svg";
import { NavLink, useParams } from "react-router-dom";

const Index = () => {
  const {id} = useParams();

  return (
    <header className={styles["header"]}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      {!id && (
        <span className={styles["headerSearch"]}>
          <i className={`bx bx-search ${styles.headerSearchIcon}`}></i>
          <input placeholder="Search Movies" type="search" />
        </span>
      )}
    </header>
  );
};

export default Index;
