
import styles from './styles.module.scss';

const Index = ({children}) => {
  return <main className={styles.content}>{children}</main>;
};

export default Index;
