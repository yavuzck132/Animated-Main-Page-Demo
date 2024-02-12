import React, { FunctionComponent, ReactNode } from 'react';
import styles from './IntroPageLayout.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
  pageSubtitle: string;
  pageDescriptionText: string;
}

export const IntroPageLayout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.imageBox}>{props.children}</div>
      <div className={styles.descriptionBox}>
        <div className={styles.descriptionSection}>
          <p className={styles.title}>{props.pageTitle}</p>
          <p className={styles.subtitle}>{props.pageSubtitle}</p>
          <p className={styles.descriptionText}>{props.pageDescriptionText}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.descriptionButton}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
