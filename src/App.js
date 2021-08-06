import { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import SiteBar from './components/SiteBar/SiteBar';
import style from './common.module.css';
// import './common.css';

const Home = lazy(() => import('./views/Home-view'));
const LogIn = lazy(() => import('./views/login-view'));
const Contacts = lazy(() => import('./views/contacts-view'));
const Register = lazy(() => import('./views/register-view'));

class App extends Component {
  componentDidMount() {
    this.props.refreshUser();
  }

  render() {
    return (
      <div className={style.wrapper}>
        <SiteBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute
              path="/login"
              component={LogIn}
              restricted
              redirectTo={'/contacts'}
            />
            <PrivateRoute
              path="/contacts"
              component={Contacts}
              redirectTo={'/login'}
            />
            <PublicRoute
              path="/register"
              component={Register}
              restricted
              redirectTo={'/contacts'}
            />
            <PublicRoute path="/" component={Home} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  refreshUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
