import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.layout}>
    <h1 className={styles.title}>
      Welcome<span className={styles.span}> to the Phonebook</span>!
    </h1>
  </div>
);

export default HomePage;
