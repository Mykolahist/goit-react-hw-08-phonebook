import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import style from './UserMenu.module.css';

function UserMenu({ userName, onLogout, token }) {
  const handelClick = () => {
    onLogout(token);
  };

  return (
    <div className={style.nav}>
      <span>User: {userName}</span>
      <button onClick={handelClick}>Exit</button>
    </div>
  );
}

const mapDispatchTOProps = {
  onLogout: authOperations.logout,
};

const mapStateToProps = state => ({
  userName: authSelectors.getUsername(state),
  token: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, mapDispatchTOProps)(UserMenu);
