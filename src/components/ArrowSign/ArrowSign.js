import React from 'react';
import styles from './ArrowSign.module.css';

const ArrowSign = () => (
  <div className={styles.wrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 408 408"
      className={styles.arrow}
    >
      <path d="M102 204H0L204 0l204 204H306v204H102z" fill="#919191" />
    </svg>
    <p className={styles.text}>Enter your search query</p>
  </div>
);

export default ArrowSign;
