import React from 'react';
import styles from './ContactTile.module.css';
import Button from '../button/Button';

interface ContactTileProps {
  style?: React.CSSProperties;
  className?: string;
}

const ContactTile: React.FC<ContactTileProps> = ({ style, className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`} style={style}>
      <div className={styles.iconWrapper}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3795_6084)">
            <path d="M45.705 2.29492H48V25.1549H45.705V2.29492Z" fill="#FF5200"/>
            <path d="M43.425 29.7148H41.145V32.0098H45.705V25.1548H43.425V29.7148Z" fill="#FF5200"/>
            <path d="M38.85 27.4351H41.145V29.7151H38.85V27.4351Z" fill="#FF5200"/>
            <path d="M36.5699 18.2852H43.4249V20.5802H36.5699V18.2852Z" fill="#FF5200"/>
            <path d="M36.5699 13.7251H43.4249V16.0051H36.5699V13.7251Z" fill="#FF5200"/>
            <path d="M38.85 9.1499H43.425V11.4299H38.85V9.1499Z" fill="#FF5200"/>
            <path d="M31.995 4.5752H43.425V6.8702H31.995V4.5752Z" fill="#FF5200"/>
            <path d="M36.5699 25.1548H38.8499V27.4348H36.5699V25.1548Z" fill="#FF5200"/>
            <path d="M34.29 22.8599V16.0049H31.995V38.8649H34.29V25.1549H36.57V22.8599H34.29Z" fill="#FF5200"/>
            <path d="M18.285 9.1499H36.57V11.4299H18.285V9.1499Z" fill="#FF5200"/>
            <path d="M22.86 38.8652H31.995V41.1452H22.86V38.8652Z" fill="#FF5200"/>
            <path d="M22.86 4.5752H29.715V6.8702H22.86V4.5752Z" fill="#FF5200"/>
            <path d="M6.85498 20.5801V34.2901H27.42V20.5801H6.85498ZM25.14 25.1551H22.86V27.4351H20.565V29.7151H13.71V27.4351H11.43V25.1551H9.13498V22.8601H11.43V25.1551H13.71V27.4351H20.565V25.1551H22.86V22.8601H25.14V25.1551Z" fill="#FF5200"/>
            <path d="M20.565 45.72H18.285V48H22.86V41.145H20.565V45.72Z" fill="#FF5200"/>
            <path d="M18.285 4.5752H20.565V6.8702H18.285V4.5752Z" fill="#FF5200"/>
            <path d="M15.99 0H45.705V2.295H15.99V0Z" fill="#FF5200"/>
            <path d="M15.99 43.4399H18.285V45.7199H15.99V43.4399Z" fill="#FF5200"/>
            <path d="M13.71 41.145H15.99V43.44H13.71V41.145Z" fill="#FF5200"/>
            <path d="M2.28003 38.8652H13.71V41.1452H2.28003V38.8652Z" fill="#FF5200"/>
            <path d="M31.995 16.0049V13.7249H15.99V2.29492H13.71V13.7249H2.28003V16.0049H31.995Z" fill="#FF5200"/>
            <path d="M0 16.0049H2.28V38.8649H0V16.0049Z" fill="#FF5200"/>
            </g>
            <defs>
            <clipPath id="clip0_3795_6084">
            <rect width="48" height="48" fill="white"/>
            </clipPath>
        </defs>
        </svg>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>VOUS AVEZ ENCORE DES QUESTIONS ?</h3>
        <p className={styles.subtitle}>Vous ne trouvez pas la réponse à votre question ? Contactez notre équipe.</p>
      </div>
      <Button isBlack={true}>
        Nous contacter
      </Button>
    </div>
  );
};

export default ContactTile;
