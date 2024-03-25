import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';

const Login: React.FC = () => {
  const { login, isLoggedIn, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = async () => {
    setIsLoading(true);
    await login();
    setIsLoading(false);
  };


  if (isLoading) {
    return <div className='px-3 py-2 bg-sky-400 rounded-md text-white'>Logando...</div>;
  }

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={logout} className='px-3 py-2 bg-sky-500 rounded-md text-white'>Logout</button>
      ) : (
        <button onClick={handleLoginClick} className='px-3 py-2 bg-sky-500 rounded-md text-white'>Login</button>
      )}
    </div>
  );
};

export default Login;
