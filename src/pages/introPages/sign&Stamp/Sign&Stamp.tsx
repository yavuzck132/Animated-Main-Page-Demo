import { IntroPageLayout } from '../../../ui/introPagelayout/IntroPageLayout';
import sharedStyles from '../IntroPagesSharedStyles.module.css';
import styles from './Sign&Stamp.module.css';

export const SignAndStamp = () => {
  return (
    <IntroPageLayout
      pageTitle="SIGN & STAMP"
      pageSubtitle="One-Tap Focus"
      pageDescriptionText="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
    >
      <div className={sharedStyles.childWrapper}>
        <div className={sharedStyles.imageWrapper}>
          <img
            className={sharedStyles.phoneImage}
            src="/images/Sign_&_Stamp_Phone.png"
          />
          <div
            className={`${styles.stampImageWrapper} ${styles.sharedImageProperties}`}
          >
            <img className={styles.stampImage} src="/images/Stamp.png" />
            <img className={styles.closeButton} src="/icons/Close_Button.svg" />
            <img
              className={styles.expandSizeButton}
              src="/icons/Expand_Size_Button.svg"
            />
          </div>
          <div
            className={`${styles.signatureImageWrapper} ${styles.sharedImageProperties}`}
          >
            <img
              className={styles.signatureImage}
              src="/images/Signature.png"
            />
            <img className={styles.closeButton} src="/icons/Close_Button.svg" />
            <img
              className={styles.expandSizeButton}
              src="/icons/Expand_Size_Button.svg"
            />
          </div>
        </div>
      </div>
    </IntroPageLayout>
  );
};
