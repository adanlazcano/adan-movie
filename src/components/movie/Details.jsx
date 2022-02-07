import { get } from "API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import Loading from "components/loading";

const Details = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(
    (_) => {
      get(`movie/${id}`).then((movie) => {
        setMovie(movie);
      });
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
        src={
          movie?.poster_path
            ? `${process.env.REACT_APP_API_IMG}${movie?.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
        }
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
