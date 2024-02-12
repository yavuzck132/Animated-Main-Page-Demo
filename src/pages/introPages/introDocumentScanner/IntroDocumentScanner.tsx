import { IntroPageLayout } from '../../../ui/introPagelayout/IntroPageLayout';
import sharedStyles from '../IntroPagesSharedStyles.module.css';

export const IntroDocumentScanner = () => {
  return (
    <IntroPageLayout
      pageTitle="DOCUMENT SCANNER"
      pageSubtitle="Scan with Ease"
      pageDescriptionText="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
    >
      <div className={sharedStyles.childWrapper}>
        <div className={sharedStyles.imageWrapper}>
          {/*Created a child wrapper to get around user agent stylesheet. It was overriding my wanted style*/}
          <img
            className={sharedStyles.phoneImage}
            src="/images/Scan_Phone.png"
          />
        </div>
      </div>
    </IntroPageLayout>
  );
};
