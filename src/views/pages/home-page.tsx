import React from 'react';
import Converters from '../layouts/converters';
import { useAuth } from '../../contexts/authContext';

const HomePage: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {!isLoggedIn ? (
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <h1 className='font-bold text-3xl mb-3'>Usuário deslogado!</h1>
          <p className='text-lg'>Você não possui acesso à esta pagina. Tente se logar.</p>
        </div>
      ) : (
        <Converters />
      )}
    </>
  );
};

export default HomePage;