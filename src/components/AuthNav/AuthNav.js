import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

const AuthNav = () => (
  <nav>
    <ul className={styles.nav__list}>
      <li>
        <NavLink
          to="/register"
          className={styles.nav__link__auth}
          activeClassName={styles.nav__link__active}
          exact
        >
          Sign in
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={styles.nav__link__auth}
          activeClassName={styles.nav__link__active}
        >
          Login
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default AuthNav;
