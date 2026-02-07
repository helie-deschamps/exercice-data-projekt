import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  isBlack?: boolean;
  withArrow?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  isBlack = false,
  withArrow = false,
  style 
}) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${isBlack ? styles.black : ''}`}
      onClick={onClick}
      style={style}
    >
      {children}
      {withArrow && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 5.76667V7.43333H10L5.41667 12.0167L6.6 13.2L13.2 6.6L6.6 0L5.41667 1.18333L10 5.76667H0Z" fill="white"/>
        </svg>
      )}
    </button>
  );
};

export default Button;
