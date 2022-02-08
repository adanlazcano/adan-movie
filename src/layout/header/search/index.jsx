import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Index = () => {
  const focusRef = useRef();
  const [query, setQuery] = useSearchParams();

  const search = query.get("search");

  useEffect(
    (_) => {
      focusRef.current.focus();
    },
    [search]
  );

  const handleChange = (e) => {
    setQuery({ search: e.target.value });
  };

  return (
    <input
      defaultValue={search ?? ""}
      ref={focusRef}
      className={styles.search}
      onChange={handleChange}
      placeholder="Search Movies"
      aria-label="Search Movies"
      type="search"
    />
  );
};

export default Index;
