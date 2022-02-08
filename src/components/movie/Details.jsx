import { get } from "API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import Loading from "components/loading";
import { getMovieImg } from "hooks/getMovieImg";

const Details = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(
    (_) => {
      const timeout = setTimeout((_) => {
        get(`movie/${id}`).then((movie) => {
          setMovie(movie);
        });
      }, 2000);

      return (_) => {
        clearTimeout(timeout);
      };
    },
    [id]
  );

  if (!movie) {
    return <Loading />;
  }

  return (
    <div className={styles.content}>
      <img
        width={300}
        height={420}
        title={movie?.title}
        src={getMovieImg(movie?.poster_path)}
        alt={movie?.title}
      />

      <div className={styles.contentDetails}>
        <p>
          <strong>Title: </strong>
          {movie?.title}
        </p>

        <p>
          <strong>Genres: </strong>
          {movie?.genres?.map((genre) => genre.name).join(", ")}
        </p>

        <p>
          <strong>Description: </strong>
          {movie?.overview}
        </p>
      </div>
    </div>
  );
};

export default Details;
