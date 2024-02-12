import { IntroPageLayout } from '../../../ui/introPagelayout/IntroPageLayout';
import sharedStyles from '../IntroPagesSharedStyles.module.css';
import styles from './BatchScanning.module.css';

export const BatchScanning = () => {
  return (
    <IntroPageLayout
      pageTitle="BATCH SCANNING"
      pageSubtitle="Multiple Page Scan"
      pageDescriptionText="Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document."
    >
      <div className={sharedStyles.childWrapper}>
        <div className={sharedStyles.imageWrapper}>
          <img
            className={sharedStyles.phoneImage}
            src="/images/Empty_Phone.png"
          />
          <img
            className={`${styles.fileImage1} ${styles.fileImage}`}
            src="/images/Document.png"
          />
          <img
            className={`${styles.fileImage2} ${styles.fileImage}`}
            src="/images/Document.png"
          />
          <img
            className={`${styles.fileImage3} ${styles.fileImage}`}
            src="/images/Document.png"
          />
        </div>
      </div>
    </IntroPageLayout>
  );
};
