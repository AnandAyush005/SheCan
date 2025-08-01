
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login (Dummy)</button>
    </div>
  );
}

export default Login;
