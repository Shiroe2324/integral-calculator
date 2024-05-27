import React from 'react';
import { Countdown } from 'react-daisyui';
import { useTime } from 'react-timer-hook';

const Clock: React.FC = () => {
  const { hours, minutes, seconds, ampm } = useTime({ format: '12-hour' });

  return (
    <span className='font-mono text-2xl'>
      <Countdown value={hours === 0 ? 12 : hours} />:
      <Countdown value={minutes} />:
      <Countdown value={seconds} />
      <span> {ampm.toUpperCase()}</span>
    </span>
  );
};

export default Clock;
