import { IntroPageLayout } from '../../../ui/introPagelayout/IntroPageLayout';
import sharedStyles from '../IntroPagesSharedStyles.module.css';
import styles from './Export&Share.module.css';

export const ExportAndShare = () => {
  return (
    <IntroPageLayout
      pageTitle="EXPORT & SHARE"
      pageSubtitle="All-Round Conversion"
      pageDescriptionText="Export your scans as PDF,JPG,ZIP,TXT and Word."
    >
      <div className={sharedStyles.childWrapper}>
        <div className={sharedStyles.imageWrapper}>
          <img
            className={sharedStyles.phoneImage}
            src="/images/Export_Phone.png"
          />
          <img className={styles.arrow} src="/images/Arrow.png" />
          <img className={styles.pdfImage} src="/images/PDF_Image.png" />
          <img className={styles.jpgImage} src="/images/JPG_Image.png" />
          <img className={styles.txtImage} src="/images/TXT_Image.png" />
        </div>
      </div>
    </IntroPageLayout>
  );
};
