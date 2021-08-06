import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handelChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <h1>Register</h1>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            name="name"
            autoComplete="off"
            onChange={this.handelChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={this.state.email}
            name="email"
            autoComplete="off"
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
        <button type="submit">Register</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
