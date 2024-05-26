import { useState, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import { Button, ConfigProvider, Drawer, Layout, Space, theme } from 'antd';
import { CodeOutlined, HomeFilled, UserOutlined } from '@ant-design/icons';
import enGB from 'antd/locale/en_GB';
import itIT from 'antd/locale/it_IT';

import {
  Nav,
  LinkItem,
  ThemeSwitcher,
  ThemeStyle,
  getCustomTheme,
  LanguageSwitcher,
  SupportedLanguage,
  HomePage,
  NavTrigger,
  PageContainer,
} from '@omw/webfolio/main';

import styles from './app.module.scss';
import './app.scss';

const Cv = lazy(() => import('cv/Module'));

export function App() {
  const { t, i18n } = useTranslation();
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeStyle>('light');
  const [language, setLanguage] = useState<SupportedLanguage>(
    i18n.language as SupportedLanguage
  );

  const links: LinkItem[] = [
    {
      path: '/',
      label: t('main:nav.home'),
      icon: <HomeFilled />,
    },
    {
      path: '/cv',
      label: t('main:nav.cv'),
      icon: <UserOutlined />,
    },
  ];

  const switchTheme = (checked: boolean) => {
    setCurrentTheme(checked ? 'light' : 'dark');
  };

  const switchLanguage = () => {
    setLanguage((currValue) => {
      const newValue = currValue === 'en' ? 'it' : 'en';
      i18n.changeLanguage(newValue);

      return newValue;
    });
  };

  const toggleNav = () => {
    setIsNavOpened((currValue) => {
      return !currValue;
    });
  };

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === 'light'
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
        token: {
          ...getCustomTheme(currentTheme),
        },
      }}
      locale={language === 'en' ? enGB : itIT}
    >
      <Suspense fallback={null}>
        <Layout className={styles['container']}>
          <div
            className={`${styles['extra']} ${styles['left']} ${styles['trigger']}`}
          >
            <NavTrigger
              isOpened={isNavOpened}
              onClick={toggleNav}
              iconSize={24}
            />
          </div>
          <div className={styles['extra']}>
            <Space>
              <Button
                icon={<CodeOutlined />}
                size="small"
                iconPosition="end"
                target="_blank"
                href="https://github.com/arnaldocrescente/oh-my-web"
              >
                {t('sourcecode')}
              </Button>
              <LanguageSwitcher
                onChange={switchLanguage}
                currentLanguage={language === 'en' ? 'it' : 'en'}
              />
              <ThemeSwitcher onChange={switchTheme} />
            </Space>
          </div>
          <Drawer
            placement="left"
            closable={false}
            onClose={toggleNav}
            open={isNavOpened}
            key={'nav-drawer'}
            width={80}
            className="drawer-nav"
          >
            <Nav links={links} onClickLink={toggleNav}></Nav>
          </Drawer>
          <div className={styles['nav']}>
            <Nav links={links}></Nav>
          </div>
          <PageContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cv" element={<Cv />} />
            </Routes>
          </PageContainer>
        </Layout>
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
