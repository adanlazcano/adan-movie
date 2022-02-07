import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const Index = ({id,title,poster_path}) => {

 

  return <li className={styles["card"]}>
    <NavLink to={`/movie/${id}`}>
    <img width={230} height={345} src={poster_path?`${process.env.REACT_APP_API_IMG}${poster_path}`:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'} alt={title} />
    <div>{title}</div>
    </NavLink>
    
    </li>;
};

export default Index;
