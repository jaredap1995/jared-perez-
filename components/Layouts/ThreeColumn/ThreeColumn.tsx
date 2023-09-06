import React from 'react';
import styles from './ThreeColumn.module.scss';

type ThreeColumnProps = {
  leftColumn: React.ReactNode;
  middleColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  className?: string;
};

const ThreeColumn = ({ leftColumn, middleColumn, rightColumn, className }: ThreeColumnProps) => {
  return (
    <div className={className}>
      <div className={styles.leftColumn}>{leftColumn}</div>
      <div className={styles.middleColumn}>{middleColumn}</div>
      <div className={styles.rightColumn}>{rightColumn}</div>
    </div>
  );
};

export default ThreeColumn;
