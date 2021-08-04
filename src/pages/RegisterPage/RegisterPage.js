import { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { authOperations } from '../../redux/auth';
import Container from '../../components/Container';
import styles from '../LoginPage/LoginPage.module.css';

class RegisterPage extends Component {
  state = {
    name: '',
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

    this.props.onRegister(this.state);

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Container>
        <div className={styles.thumb}>
          <h2 className={styles.title}>Registration</h2>
          <form onSubmit={this.handleSubmit}>
            <label className={styles.label}>
              Name
              <input
                className={styles.input}
                type="text"
                name="name"
                required
                value={name}
                onChange={this.handleChange}
              />
            </label>

            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                type="email"
                name="email"
                required
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
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <div className={styles.button__container}>
              <Button type="submit" variant="contained" color="primary">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
