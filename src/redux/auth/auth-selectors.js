const getIsAuthenticated = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

export default { getIsAuthenticated, getUserName };
