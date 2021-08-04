import styles from './Error.module.css';

const Error = () => (
  <h2 className={styles.message}>
    Ooops! Something went wrong. Please try again later.
  </h2>
);

export default Error;
