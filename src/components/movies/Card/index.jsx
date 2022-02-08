import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { getMovieImg } from "hooks/getMovieImg";

const Index = ({ id, title, poster_path }) => {
  return (
    <li className={styles["card"]}>
      <NavLink to={`/movie/${id}`}>
        <img
          width={230}
          height={345}
          title={title}
          src={getMovieImg(poster_path)}
          alt={title}
        />
        <div>{title}</div>
      </NavLink>
    </li>
  );
};

export default Index;
