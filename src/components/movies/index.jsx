import styles from "./styles.module.scss";
import Card from "./Card";
import { useEffect, useState } from "react";
import { get } from "API";
import Loading from 'components/loading'

const Index = () => {
  const [movies, setMovies] = useState(null);

  useEffect((_) => {
    get("discover/movie").then((movies) => {
      setMovies(movies.results);
    });
  }, []);

  if(!movies){

    return <Loading/>
  }

  return (
    <ul className={styles["movies"]}>
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default Index;
