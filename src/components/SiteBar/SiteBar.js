import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthNav } from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import style from './SiteBar.module.css';
import { authSelectors } from '../../redux/auth';

function SiteBar({ isAuthenticated }) {
  return (
    <div className={style.site__bar}>
      <Link to="/">Home</Link>
      {isAuthenticated && <Link to="/contacts">Contacts</Link>}
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(SiteBar);
