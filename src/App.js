import React, { useState, useEffect } from "react";
import FormattedTime from "./component/FormattedTime/FormattedTime";
import styles from "./App.module.scss";

const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleStartClick = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setIntervalId(id);
    }
  };

  const handleStopClick = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleResetClick = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  };

  return (
    <div className={styles.container}>
      <FormattedTime time={time} />
      <div className={styles.buttons}>
        <button className={styles.start} onClick={handleStartClick}>Start</button>
        <button className={styles.stop} onClick={handleStopClick}>Stop</button>
        <button className={styles.reset} onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default App;
