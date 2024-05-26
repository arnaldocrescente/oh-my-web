import React from 'react';
import styles from './page-container.module.scss';

export interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { children } = props;
  return <div className={styles['container']}>{children}</div>;
};

export default PageContainer;
