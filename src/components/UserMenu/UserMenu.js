import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, userName, onLogout }) => (
  <>
    <img src={avatar} alt="avatar" className={styles.avatar} width="35" />
    <span className={styles.user}>Welcome, {userName}</span>
    <Button variant="contained" onClick={onLogout} size="small">
      Logout
    </Button>
  </>
);

const mapStateToProps = state => ({
  userName: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
