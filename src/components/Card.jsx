import React from 'react';
import styles from '../scss/components/card.module.scss';

export default function Card({imageSrc,stack,githubRepo,deployLink,description,title,}) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardDetails}>
          <p>
            <strong>Stack:</strong> {stack}
          </p>
          <div className={styles.teste}>

          <p className={styles.teste}>
            <a href={githubRepo} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
          <p>
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              Deploy
            </a>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};


