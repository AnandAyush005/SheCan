
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Signup</h2>
      <button onClick={handleSignup}>Signup (Dummy)</button>
    </div>
  );
}

export default Signup;