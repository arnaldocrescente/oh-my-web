import React from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

import styles from './download-link.module.scss';

export interface DownloadLinkProps {
  iconSize?: number;
}

export const DownloadLink: React.FC<DownloadLinkProps> = (props) => {
  const { iconSize = 18 } = props;
  const { t } = useTranslation(['cv']);
  return (
    <>
      <Typography.Link href={t('downloadUrl')} className={styles['container']}>
        <Typography.Text>Download CV</Typography.Text>
        <CloudDownloadOutlined style={{ fontSize: iconSize }} />
      </Typography.Link>
    </>
  );
};
