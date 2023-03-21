import React from 'react';
import styles from "./FormattedTime.module.scss";

const MILLISECONDS_IN_HOUR = 3600000;
const MILLISECONDS_IN_MINUTE = 60000;
const MILLISECONDS_IN_SECOND = 1000;

const FormattedTime = ({ time }) => {
  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
    milliseconds = milliseconds % MILLISECONDS_IN_HOUR;
    const minutes = Math.floor(milliseconds / MILLISECONDS_IN_MINUTE);
    milliseconds = milliseconds % MILLISECONDS_IN_MINUTE;
    const seconds = Math.floor(milliseconds / MILLISECONDS_IN_SECOND);
    milliseconds = milliseconds % MILLISECONDS_IN_SECOND;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds
      .toString()
      .padStart(3, '0')}`;
  };

  return <div className={styles.formattedTime}>{formatTime(time)}</div>;
};

export default FormattedTime;
