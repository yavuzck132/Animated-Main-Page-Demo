import { IntroPageLayout } from '../../../ui/introPagelayout/IntroPageLayout';
import sharedStyles from '../IntroPagesSharedStyles.module.css';
import styles from './AdvancedFilters.module.css';

export const AdvancedFilters = () => {
  return (
    <IntroPageLayout
      pageTitle="ADVANCED FILTERS"
      pageSubtitle="Unique Filters"
      pageDescriptionText="Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters."
    >
      <div className={sharedStyles.childWrapper}>
        <div className={sharedStyles.imageWrapper}>
          <img
            className={sharedStyles.phoneImage}
            src="/images/Sign_&_Stamp_Phone.png"
          />
          <img className={styles.leftBar} src="/images/Left_Bar.png" />
          <img className={styles.rightBar} src="/images/Right_Bar.png" />
        </div>
      </div>
    </IntroPageLayout>
  );
};
