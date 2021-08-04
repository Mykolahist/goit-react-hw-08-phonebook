import styles from './Notification.module.css';

const Notification = ({ name }) => (
  <div className={styles.thumb}>
    <p className={styles.message}>{name} is already in contacts</p>
  </div>
);

export default Notification;
