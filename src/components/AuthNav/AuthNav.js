import { Link } from 'react-router-dom';

export function AuthNav() {
  return (
    <div>
      <Link to="/login">LogIn</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
