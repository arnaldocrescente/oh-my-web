import React from 'react';
import { MoonFilled, SunFilled } from '@ant-design/icons';
import { Switch } from 'antd';

export interface ThemeSwitcherProps {
  onChange: (checked: boolean) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = React.memo(
  (props) => {
    const { onChange } = props;
    return (
      <Switch
        checkedChildren={<SunFilled />}
        unCheckedChildren={<MoonFilled />}
        defaultChecked
        onChange={onChange}
      />
    );
  }
);
