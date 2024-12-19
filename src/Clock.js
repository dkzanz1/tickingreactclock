
import React, { useState, useEffect } from 'react';
import 'clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  const hoursDegrees = ((hours % 12 / 12) * 360) + ((minutes / 60) * 30) + 90;


  return ( // JSX is used here, so React import is needed
    <><div>
      <h1>Current Time: {time}</h1>
    </div>
    <div>
    <div className="clock-face">
        <div className="hand hour-hand" style={{ transform: `rotate(${hoursDegrees}deg)` }} />
        <div className="hand minute-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }} />
        <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }} />
        <div className="center-circle" />
      </div>
      <div className="digital-time">{time.toLocaleTimeString()}</div>

    </div>
    </>
  );
};

export default Clock;