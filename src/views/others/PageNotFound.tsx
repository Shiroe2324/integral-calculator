import React from 'react';
import { Button } from 'react-daisyui';
import { FaTriangleExclamation } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <main className='flex flex-col items-center justify-center flex-grow'>
      <FaTriangleExclamation size={100} className='mb-4 text-warning' />
      <h1 className='text-4xl text-base-content font-bold mb-4'>404 - Página no Encontrada</h1>
      <p className='text-lg text-base-content'>Lo sentimos, la página que estás buscando no existe.</p>
      <Button onClick={handleClick} color='primary' className='mt-4'>
        Regresar a la página anterior
      </Button>
    </main>
  );
};

export default PageNotFound;
