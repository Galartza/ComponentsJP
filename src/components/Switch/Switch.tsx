'use client';
import React, { useState } from 'react';
import Styles from './Switch.module.css';
import { FaDotCircle } from 'react-icons/fa';

export const Switch = () => {
  const [isToday, setIsToday] = useState(false);

  return (
    <div className={Styles.containerSwitch}>
      <label htmlFor="filter" className={Styles.switch} aria-label="Toggle Filter">
        <input
          type="checkbox"
          id="filter"
          checked={isToday}
          onChange={() => setIsToday(prev => !prev)}
        />
        <span className={Styles.label}>Hoy</span>
        <span className={Styles.label}>Total</span>
        <div
          className={`${Styles.switchIndicator} ${
            isToday ? Styles.left : Styles.right
          }`}
        >
          <FaDotCircle style={{ color: "#0a9396", fontSize: '1.2rem', marginLeft: '.5rem' }} />
        </div>
      </label>
    </div>
  );
};

export default Switch;
