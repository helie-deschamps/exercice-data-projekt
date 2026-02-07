import React from 'react';
import styles from './PageTitle.module.css';

interface PageTitleProps {
  title: string;
  subtitle: string;
  style?: React.CSSProperties;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, style }) => {
  return (
    <div className={styles.container} style={style}>
      <div className={styles.texts}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
