import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { NavItem } from '../nav-item/nav-item';

import styles from './nav-trigger.module.scss';

export interface NavTriggerProps {
  iconSize?: number | string;
  isOpened: boolean;
  onClick: () => void;
}

export const NavTrigger: React.FC<NavTriggerProps> = React.memo((props) => {
  const { iconSize = 20, isOpened, onClick } = props;

  const getIcon = () => {
    return isOpened ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />;
  };

  return (
    <div onClick={onClick} className={styles['container']}>
      <NavItem label="" path="" icon={getIcon()} iconSize={iconSize} />
    </div>
  );
});
