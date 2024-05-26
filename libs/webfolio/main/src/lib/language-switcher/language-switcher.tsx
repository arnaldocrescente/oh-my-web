import React from 'react';

import Icon from '@ant-design/icons';

import { ItaFlag, UkFlag } from '@omw/shared/flags';

import styles from './language-switcher.module.scss';

export type SupportedLanguage = 'it' | 'en';

interface Language {
  title: string;
  abbr: string;
}

export interface LanguageSwitcherProps {
  currentLanguage: SupportedLanguage;
  onChange: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = React.memo(
  (props) => {
    const { onChange, currentLanguage } = props;

    const languages: Record<SupportedLanguage, Language> = {
      it: {
        title: 'Italiano',
        abbr: 'IT',
      },
      en: {
        title: 'English',
        abbr: 'EN',
      },
    };

    return (
      <Icon
        className={styles['flag']}
        onClick={onChange}
        component={currentLanguage === 'it' ? ItaFlag : UkFlag}
        alt={languages[currentLanguage].abbr}
        title={languages[currentLanguage].title}
      />
    );
  }
);
