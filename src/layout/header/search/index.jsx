import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "hooks/useQuery";

const Index = () => {
  const navigate = useNavigate();
  const focusRef = useRef();

  const query = useQuery();
  const search = query.get("search");

  useEffect(
    (_) => {
      focusRef.current.focus();
    },
    [search]
  );

  const handleChange = (e) => {
    navigate({
      search: e.target.value.length > 0 ? `search=${e.target.value}` : "",
    });
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
