import React from 'react';

import { ItaFlag, UkFlag } from '@omw/shared/flags';

import styles from './language-switcher.module.scss';

export type SupportedLanguage = 'it' | 'en';

export interface LanguageSwitcherProps {
  currentLanguage: SupportedLanguage;
  onChange: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = React.memo(
  (props) => {
    const { onChange, currentLanguage } = props;

    return (
      <div className={styles['flag']} onClick={onChange}>
        {currentLanguage === 'it' ? <UkFlag /> : <ItaFlag />}
      </div>
    );
  }
);
