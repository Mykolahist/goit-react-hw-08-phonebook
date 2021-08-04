import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

import Header from './components/Header';
import Loader from './components/Loader';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';
import { authOperations } from './redux/auth';

import './common.css';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <Header />

        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsPage}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
