import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './OptionBar.module.css';
import { useState } from 'react';
export const OptionBar = () => {
  const [prevPath, setPrevPath] = useState<string>('');
  const location = useLocation();
  const updatePrevPath = (path: string) => {
    if (prevPath !== path) {
      setPrevPath(location.pathname);
    }
  };
  const optionBarItemStyle = (path: string) => {
    if (location.pathname === path) {
      return styles.selectedOptionBarItem;
    } else if (prevPath === path) {
      return styles.unSelectedOptionBarItem;
    }
    return '';
  };
  const animationStyle = (path: string) => {
    if (location.pathname === path) {
      return styles.selectedAnimationBorder;
    } else if (prevPath === path) {
      return styles.unSelectedAnimationBorder;
    }
    return '';
  };
  return (
    <div>
      <Outlet />
      <div className={styles.optionBar}>
        <Link
          to="/"
          className={`${optionBarItemStyle('/')} ${styles.optionBarItem}`}
          onClick={() => updatePrevPath('/')}
        >
          <div className={styles.imageBorder}>
            <div className={`${animationStyle('/')}`} />
            {location.pathname === '/' ? (
              <img src="/icons/Document Scanner Selected.svg" />
            ) : (
              <img src="/icons/Document Scanner.svg" />
            )}
          </div>
          <span className={styles.optionText}>Document Scanner</span>
        </Link>
        <Link
          to="/sign&stamp"
          className={`${optionBarItemStyle('/sign&stamp')} ${styles.optionBarItem}`}
          onClick={() => updatePrevPath('/sign&stamp')}
        >
          <div className={styles.imageBorder}>
            <div className={`${animationStyle('/sign&stamp')}`} />
            {location.pathname === '/sign&stamp' ? (
              <img src="/icons/Sign & Stamp Selected.svg" />
            ) : (
              <img src="/icons/Sign & Stamp.svg" />
            )}
          </div>
          <span className={styles.optionText}>Sign & Stamp</span>
        </Link>
        <Link
          to="/batchScanning"
          className={`${optionBarItemStyle('/batchScanning')} ${styles.optionBarItem}`}
          onClick={() => updatePrevPath('/batchScanning')}
        >
          <div className={styles.imageBorder}>
            <div className={styles.animatedBorder}>
              <div className={`${animationStyle('/batchScanning')}`} />
              {location.pathname === '/batchScanning' ? (
                <img src="/icons/Batch Scanning Selected.svg" />
              ) : (
                <img src="/icons/Batch Scanning.svg" />
              )}
            </div>
          </div>
          <span className={styles.optionText}>Batch Scanning</span>
        </Link>
        <Link
          to="/advancedFilters"
          className={`${optionBarItemStyle('/advancedFilters')} ${styles.optionBarItem}`}
          onClick={() => updatePrevPath('/advancedFilters')}
        >
          <div className={styles.imageBorder}>
            <div className={`${animationStyle('/advancedFilters')}`} />
            {location.pathname === '/advancedFilters' ? (
              <img src="/icons/Advanced Filters Selected.svg" />
            ) : (
              <img src="/icons/Advanced Filters.svg" />
            )}
          </div>
          <span className={styles.optionText}>Advanced Filters</span>
        </Link>
        <Link
          to="/export&share"
          className={`${optionBarItemStyle('/export&share')} ${styles.optionBarItem}`}
          onClick={() => updatePrevPath('/export&share')}
        >
          <div className={styles.imageBorder}>
            <div className={`${animationStyle('/export&share')}`} />
            {location.pathname === '/export&share' ? (
              <img src="/icons/Export & Share Selected.svg" />
            ) : (
              <img src="/icons/Export & Share.svg" />
            )}
          </div>
          <span className={styles.optionText}>Export & Share</span>
        </Link>
      </div>
    </div>
  );
};
