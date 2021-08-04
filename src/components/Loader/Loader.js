import Spinner from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.container}>
    <Spinner
      type="ThreeDots"
      color="rgb(100, 150, 255)"
      height={60}
      width={60}
    />
  </div>
);

export default Loader;
