import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
class LogIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handelChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <h1>LogIn</h1>
        <label>
          Email
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handelChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handelChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LogIn);
