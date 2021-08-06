import axios from 'axios';
import actions from './auth-actions';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(actions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(actions.registerSuccess(response.data));
  } catch (error) {
    dispatch(actions.registerError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(actions.loginRequest);

  try {
    const response = await axios.post('users/login', credentials);

    token.set(response.data.token);
    dispatch(actions.loginSuccess(response.data));
  } catch (error) {
    dispatch(actions.logoutError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(actions.logoutRequest);

  try {
    await axios.post('users/logout');

    token.unset();
    dispatch(actions.logoutSuccess());
  } catch (error) {
    dispatch(actions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(actions.getCurrentUserRequest());

  try {
    const response = await axios.get('users/current');

    dispatch(actions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error.massage));
  }
};

export default { register, login, logout, getCurrentUser };
