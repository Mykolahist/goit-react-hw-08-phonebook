import { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { authOperations } from '../../redux/auth';
import Container from '../../components/Container';
import styles from './LoginPage.module.css';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState = {
      email: '',
      password: '',
    };
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <div className={styles.thumb}>
          <h2 className={styles.title}>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <label className={styles.label}>
              E-mail
              <input
                className={styles.input}
                type="email"
                name="email"
                required
                autoComplete="off"
                value={email}
                onChange={this.handleChange}
              />
            </label>

            <label className={styles.label}>
              Password
              <input
                className={styles.input}
                type="password"
                name="password"
                required
                autoComplete="off"
                value={password}
                onChange={this.handleChange}
              />
            </label>

            <div className={styles.button__container}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
