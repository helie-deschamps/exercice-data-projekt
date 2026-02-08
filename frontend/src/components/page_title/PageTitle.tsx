import React from 'react';
import styles from './PageTitle.module.css';

interface PageTitleProps {
  title: string;
  subtitle: string;
  style?: React.CSSProperties;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, style, className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`} style={style}>
      <div className={styles.texts}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
