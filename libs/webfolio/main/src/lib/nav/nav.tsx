import React from 'react';

import { NavItem } from '../nav-item/nav-item';

import styles from './nav.module.scss';

export interface LinkItem {
  path: string;
  label: string;
  labelSize?: number | string;
  icon?: React.ReactNode;
  iconSize?: number | string;
}

export interface NavProps {
  links: LinkItem[];
  onClickLink?: () => void;
}

export const Nav: React.FC<NavProps> = React.memo((props) => {
  const {
    links,
    onClickLink = () => {
      return;
    },
  } = props;

  const renderItems = () => {
    const items: React.ReactNode[] = [];
    for (const item of links) {
      const navItem = (
        <div className={styles['item']} key={item.path} onClick={onClickLink}>
          <NavItem {...item} />
        </div>
      );
      items.push(navItem);
    }

    return items;
  };

  return (
    <div className={styles['container']}>
      <div className={styles['nav']}>{renderItems()}</div>
    </div>
  );
});
