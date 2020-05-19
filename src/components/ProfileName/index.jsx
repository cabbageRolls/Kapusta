import React from 'react';
import styles from './ProfileName.module.css';
import MediaQuery from 'react-responsive';

const index = ({ userName }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.firstLetter}>{userName[0]}</div>
      <MediaQuery minDeviceWidth={768}>
        <span className={styles.text}>{userName}</span>
      </MediaQuery>
    </div>
  );
};

index.defaultProps = {
  userName: 'User Name',
};

export default index;
