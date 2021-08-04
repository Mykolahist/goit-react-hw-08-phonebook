import styles from './Container.module.css';

const Container = ({ children }) => (
  <section>
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  </section>
);

export default Container;
