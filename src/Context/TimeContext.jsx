import React, { createContext, useState, useEffect } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(10 * 60);  // Timer initial value (10 minutes in seconds)
  const [timerActive, setTimerActive] = useState(true);  // Whether the timer is running

  // Stop the timer
  const stopTimer = () => {
    setTimerActive(false);  // Pause the timer
  };

  // Timer logic: decrease timeLeft every second when active
  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);  // Decrease time by 1 second
      }, 1000);
    }

    // Clear interval when timer is paused or reaches 0
    return () => clearInterval(timer);
  }, [timerActive, timeLeft]);

  return (
    <TimerContext.Provider value={{ timeLeft, stopTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
