import { AliasToken } from 'antd/es/theme/internal';

export type ThemeStyle = 'dark' | 'light';

const commonTheme: Partial<AliasToken> = {
  colorPrimary: '#328bc3',
  colorInfo: '#328bc3',
  colorSuccess: '#5fa43c',
  colorWarning: '#d8ba6a',
  colorError: '#c87032',
};

const lightTheme: Partial<AliasToken> = {
  colorTextBase: '#1B1B1D',
  colorLink: '#1B1B1D',
};

const darkTheme: Partial<AliasToken> = {
  colorTextBase: '#F8F8F8',
  colorLink: '#F8F8F8',
};

export const getCustomTheme = (style: ThemeStyle): Partial<AliasToken> => {
  return { ...commonTheme, ...(style === 'dark' ? darkTheme : lightTheme) };
};
