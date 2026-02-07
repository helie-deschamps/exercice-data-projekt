import React from 'react';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
  type?: 'info';
  onClose?: () => void;
  style?: React.CSSProperties;
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  type = 'info',
  onClose,
  style 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'info':
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM11 14C11 14.5523 10.5523 15 10 15C9.44771 15 9 14.5523 9 14V9C9 8.44771 9.44771 8 10 8C10.5523 8 11 8.44771 11 9V14ZM9 6C9 6.55228 9.44771 7 10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44771 5 9 5.44772 9 6Z" fill="#00B8D9"/>
        </svg>
        );
    }
  };

  return (
    <div className={`${styles.toast} ${styles[type]}`} style={style}>
      <div className={styles.iconWrapper}>
        {getIcon()}
      </div>
      <p className={styles.message}>{message}</p>
      {onClose && (
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          ×
        </button>
      )}
    </div>
  );
};

export default Toast;
