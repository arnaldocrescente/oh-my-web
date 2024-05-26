import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

import styles from './nav-item.module.scss';

export interface NavItemProps {
  path?: string;
  label: string;
  labelSize?: number | string;
  icon?: React.ReactNode;
  iconSize?: number | string;
}

export const NavItem: React.FC<NavItemProps> = React.memo((props) => {
  const {
    path,
    label,
    icon = <></>,
    labelSize = '9px',
    iconSize = '30px',
  } = props;

  const renderItem = () => {
    const item = (
      <>
        <div className={styles['icon']} style={{ fontSize: iconSize }}>
          {icon}
        </div>
        <span
          className={styles['label']}
          style={{
            fontSize: labelSize,
          }}
        >
          {label}
        </span>
      </>
    );
    if (path) {
      return (
        <Link to={path} className={styles['container']} title={`${label} link`}>
          {item}
        </Link>
      );
    }

    return <Typography.Text>{item}</Typography.Text>;
  };

  return renderItem();
});
