import { ModuleFederationConfig } from '@nx/webpack';

const coreLibs = new Set([
  '@ant-design/icons',
  'antd',
  'i18next',
  'react',
  'react-dom',
  'react-i18next',
  'react-router-dom',
  '@omw/webfolio/i18n',
]);

const config: ModuleFederationConfig = {
  name: 'main',
  remotes: ['cv'],
  shared: (libName, defaultConfig) => {
    if (coreLibs.has(libName)) {
      return defaultConfig;
    }
    return false;
  },
};

export default config;
