import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const CountdownTimer = ({ targetDate }) => {
  const { box } = styles;

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
        Secs: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        Days: 0,
        Hours: 0,
        Mins: 0,
        Secs: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timerComponents.push(
        <span key={interval} className={box}>
          {formatNumber(timeLeft[interval])} {interval}{' '}
        </span>
      );
    }
  });

  return timerComponents;
};

export default CountdownTimer;
