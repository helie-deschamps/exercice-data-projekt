import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type BaseButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  isBlack?: boolean;
  withArrow?: boolean;
  style?: React.CSSProperties;
};

type ButtonAsButton = BaseButtonProps & {
  href?: never;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = BaseButtonProps & {
  href: string;
  onClick?: never;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  href,
  variant = 'primary',
  isBlack = false,
  withArrow = false,
  style,
  ...rest
}) => {
  const className = `${styles.button} ${styles[variant]} ${isBlack ? styles.black : ''} ${href ? styles.link : ''}`;
  
  const content = (
    <>
      {children}
      {withArrow && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 5.76667V7.43333H10L5.41667 12.0167L6.6 13.2L13.2 6.6L6.6 0L5.41667 1.18333L10 5.76667H0Z" fill="white"/>
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link 
        to={href}
        className={className}
        style={style}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      className={className}
      onClick={onClick}
      style={style}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;
