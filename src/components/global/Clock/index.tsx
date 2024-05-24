import React, { useEffect, useState } from 'react';
import { Countdown } from 'react-daisyui';

const getMinutes = (date: Date): number => date.getMinutes();
const getSeconds = (date: Date): number => date.getSeconds();
const getHours = (date: Date): number => {
  const h = date.getHours();
  return h > 12 ? h - 12 : h === 0 ? 12 : h;
};
const getAmPm = (date: Date): string => {
  const h = date.getHours();
  return h >= 12 ? 'PM' : 'AM';
};

const Clock: React.FC = () => {
  const initDate = new Date();
  const [hours, setHours] = useState<number>(getHours(initDate));
  const [minutes, setMinutes] = useState<number>(getMinutes(initDate));
  const [seconds, setSeconds] = useState<number>(getSeconds(initDate));
  const [amPm, setAmPm] = useState<string>(getAmPm(initDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setHours(getHours(date));
      setAmPm(getAmPm(date));
      setMinutes(getMinutes(date));
      setSeconds(getSeconds(date));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className='font-mono text-2xl'>
      <Countdown value={hours} />:
      <Countdown value={minutes} />:
      <Countdown value={seconds} />
      <span> {amPm}</span>
    </span>
  );
};

export default Clock;
