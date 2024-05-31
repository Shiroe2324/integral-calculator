import React from 'react';
import { Button } from 'react-daisyui';
import { FaCopy } from 'react-icons/fa';

interface SuccessCardHeaderProps {
  title: string;
  ButtonOnClick: () => void;
  buttonText: string;
  type: 'primary' | 'secondary' | 'info' | 'success' | 'error' | 'warning';
}

const SuccessCardHeader: React.FC<SuccessCardHeaderProps> = ({ title, ButtonOnClick, buttonText, type }) => {
  return (
    <div className='flex items-center justify-between'>
      <h2 className={`text-2xl font-semibold text-${type}-content`}>{title}</h2>
      <Button onClick={ButtonOnClick} size='sm' variant='outline' className={`text-${type}-content`}>
        <FaCopy /> {buttonText}
      </Button>
    </div>
  );
};

export default SuccessCardHeader;
