import React from 'react';
import styles from "./FormattedTime.module.scss";

const FormattedTime = ({ time }) => {
  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;
    const minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;
    const seconds = Math.floor(milliseconds / 1000);
    milliseconds = milliseconds % 1000;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds
      .toString()
      .padStart(3, '0')}`;
  };

  return <div className={styles.formattedTime}>{formatTime(time)}</div>;
};

export default FormattedTime;